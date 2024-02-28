use std::{
    sync::{Arc, Mutex},
    time::Instant,
};

use log::info;
use specs::{ReadExpect, ReadStorage, System, WriteStorage};
use voxelize::{Chunks, Registry, RigidBodyComp, Vec3, VoxelAccess, WorldConfig};

use crate::worlds::shared::{
    astar::{AStar, PathNode},
    components::{PathComp, TargetComp},
};

const MAX_DEPTH_SEARCH: i32 = 2048;

pub struct PathFindingSystem;

impl<'a> System<'a> for PathFindingSystem {
    type SystemData = (
        ReadExpect<'a, Chunks>,
        ReadExpect<'a, Registry>,
        ReadExpect<'a, WorldConfig>,
        ReadStorage<'a, RigidBodyComp>,
        ReadStorage<'a, TargetComp>,
        WriteStorage<'a, PathComp>,
    );

    fn run(&mut self, data: Self::SystemData) {
        use rayon::prelude::*;
        use specs::ParJoin;

        let (chunks, registry, config, bodies, targets, mut paths) = data;

        let get_is_voxel_passable = |vx: i32, vy: i32, vz: i32| {
            let voxel = chunks.get_voxel(vx, vy, vz);
            let block = registry.get_block_by_id(voxel);
            block.is_passable || block.is_fluid
        };

        // Returns whether or not a block can be stepped on
        let walkable = |vx: i32, vy: i32, vz: i32, h: f32| {
            if get_is_voxel_passable(vx, vy, vz) {
                return false;
            }

            for i in 1..(h.ceil() as i32 + 1) {
                if !get_is_voxel_passable(vx, vy + i, vz) {
                    return false;
                }
            }

            true
        };

        let get_standable_voxel = |voxel: &Vec3<i32>| -> Vec3<i32> {
            let mut voxel = voxel.clone();

            loop {
                if voxel.1 == 0 || get_is_voxel_passable(voxel.0, voxel.1, voxel.2) {
                    voxel.1 -= 1;
                } else {
                    break;
                }
            }

            voxel.1 += 1;
            voxel
        };

        (&bodies, &targets, &mut paths)
            .par_join()
            .for_each(|(body, target, entity_path)| {
                if let Some(target) = target.0.to_owned() {
                    let body_pos = body.0.get_position();

                    let height = body.0.aabb.height();

                    // Position has to be rounded down because it's offset by +0.5
                    let body_vpos = Vec3(body_pos.0.floor() as i32, body_pos.1.floor() as i32, body_pos.2.floor() as i32);
                    let target_vpos = Vec3(target.0.floor() as i32, target.1.floor() as i32, target.2.floor() as i32);

                    let start = get_standable_voxel(&body_vpos);
                    let goal = get_standable_voxel(&target_vpos);

                    let count = Arc::new(Mutex::new(0));

                    let path = AStar::calculate(
                        &start,
                        &goal,
                        &|node| {
                            let &PathNode(vx, vy, vz) = node;
                            let mut successors = vec![];
                            let mut locked_count = count.lock().unwrap();

                            *locked_count += 1;
                            if *locked_count >= MAX_DEPTH_SEARCH {
                                return successors;
                            }

                            // emptiness
                            let py = !walkable(vx, vy + 1, vz, height);
                            let px = !walkable(vx + 1, vy, vz, height);
                            let pz = !walkable(vx, vy, vz + 1, height);
                            let nx = !walkable(vx - 1, vy, vz, height);
                            let nz = !walkable(vx, vy, vz - 1, height);
                            let pxpy = !walkable(vx + 1, vy + 1, vz, height);
                            let pzpy = !walkable(vx, vy + 1, vz + 1, height);
                            let nxpy = !walkable(vx - 1, vy + 1, vz, height);
                            let nzpy = !walkable(vx, vy + 1, vz - 1, height);

                            // +X direction
                            if walkable(vx + 1, vy - 1, vz, height) {
                                successors.push((PathNode(vx + 1, vy, vz), 1));
                            } else if walkable(vx + 1, vy, vz, height) && py {
                                successors.push((PathNode(vx + 1, vy + 1, vz), 2));
                            } else if walkable(vx + 1, vy - 2, vz, height) && px {
                                successors.push((PathNode(vx + 1, vy - 1, vz), 2));
                            }

                            // -X direction
                            if walkable(vx - 1, vy - 1, vz, height) {
                                successors.push((PathNode(vx - 1, vy, vz), 1));
                            } else if walkable(vx - 1, vy, vz, height) && py {
                                successors.push((PathNode(vx - 1, vy + 1, vz), 2));
                            } else if walkable(vx - 1, vy - 2, vz, height) && nx {
                                successors.push((PathNode(vx - 1, vy - 1, vz), 2));
                            }

                            // +Z direction
                            if walkable(vx, vy - 1, vz + 1, height) {
                                successors.push((PathNode(vx, vy, vz + 1), 1));
                            } else if walkable(vx, vy, vz + 1, height) && py {
                                successors.push((PathNode(vx, vy + 1, vz + 1), 2));
                            } else if walkable(vx, vy - 2, vz + 1, height) && pz {
                                successors.push((PathNode(vx, vy - 1, vz + 1), 2));
                            }

                            // -Z direction
                            if walkable(vx, vy - 1, vz - 1, height) {
                                successors.push((PathNode(vx, vy, vz - 1), 1));
                            } else if walkable(vx, vy, vz - 1, height) && py {
                                successors.push((PathNode(vx, vy + 1, vz - 1), 2));
                            } else if walkable(vx, vy - 2, vz - 1, height) && nz {
                                successors.push((PathNode(vx, vy - 1, vz - 1), 2));
                            }

                            // +X+Z direction
                            if walkable(vx + 1, vy - 1, vz + 1, height) && px && pz {
                                successors.push((PathNode(vx + 1, vy, vz + 1), 2));
                            } else if walkable(vx + 1, vy, vz + 1, height) && py && pxpy && pzpy {
                                successors.push((PathNode(vx + 1, vy + 1, vz + 1), 3));
                            } else if walkable(vx + 1, vy - 2, vz + 1, height) && px && pz {
                                successors.push((PathNode(vx + 1, vy - 1, vz + 1), 3));
                            }

                            // +X-Z direction
                            if walkable(vx + 1, vy - 1, vz - 1, height) && px && nz {
                                successors.push((PathNode(vx + 1, vy, vz - 1), 2));
                            } else if walkable(vx + 1, vy, vz - 1, height) && py && pxpy && nzpy {
                                successors.push((PathNode(vx + 1, vy + 1, vz - 1), 3));
                            } else if walkable(vx + 1, vy - 2, vz - 1, height) && px && nz {
                                successors.push((PathNode(vx + 1, vy - 1, vz - 1), 3));
                            }

                            // -X+Z direction
                            if walkable(vx - 1, vy - 1, vz + 1, height) && nx && pz {
                                successors.push((PathNode(vx - 1, vy, vz + 1), 2));
                            } else if walkable(vx - 1, vy, vz + 1, height) && py && nxpy && pzpy {
                                successors.push((PathNode(vx - 1, vy + 1, vz + 1), 3));
                            } else if walkable(vx - 1, vy - 2, vz + 1, height) && nx && pz {
                                successors.push((PathNode(vx - 1, vy - 1, vz + 1), 3));
                            }

                            // -X-Z direction
                            if walkable(vx - 1, vy - 1, vz - 1, height) && nx && nz {
                                successors.push((PathNode(vx - 1, vy, vz - 1), 2));
                            } else if walkable(vx - 1, vy, vz - 1, height) && py && nxpy && nzpy {
                                successors.push((PathNode(vx - 1, vy + 1, vz - 1), 3));
                            } else if walkable(vx - 1, vy - 2, vz - 1, height) && nx && nz {
                                successors.push((PathNode(vx - 1, vy - 1, vz - 1), 3));
                            }

                            successors
                        },
                        &|p| p.distance(&PathNode(goal.0, goal.1, goal.2)) / 3,
                    );

                    if let Some((nodes, count)) = path {
                        if count > entity_path.max_nodes as u32 {
                            entity_path.path = None;
                        } else {
                            entity_path.path = Some(
                                nodes
                                    .clone()
                                    .iter()
                                    .map(|p| Vec3(p.0, p.1, p.2))
                                    .collect::<Vec<_>>(),
                            );
                        }
                    } else {
                        entity_path.path = None;
                    }
                }
            });
    }
}
