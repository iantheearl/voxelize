import { Instance as PeerInstance } from "simple-peer";

import { Client } from "..";
import { Peer, PeerParams } from "../libs";

import { Network } from "./network";

type PeersParams = {
  lerpFactor: number;
  headColor: string;
  headDimension: number;
  maxNameDistance: number;
};

const defaultParams: PeersParams = {
  lerpFactor: 0.6,
  headColor: "#94d0cc",
  headDimension: 0.4,
  maxNameDistance: 50,
};

class Peers extends Map<string, Peer> {
  public params: PeerParams;

  constructor(public client: Client, params: Partial<PeersParams> = {}) {
    super();

    this.params = {
      ...defaultParams,
      ...params,
    };
  }

  addPeer = (id: string, connection: PeerInstance) => {
    const { headColor, headDimension, lerpFactor, maxNameDistance } =
      this.params;
    const { scene } = this.client.rendering;

    const peer = new Peer(connection, {
      headColor,
      headDimension,
      lerpFactor,
      maxNameDistance,
    });

    // connection made
    connection.on("connect", () => {
      console.log(`connected to peer ${id}`);
      peer.connected = true;
      scene.add(peer.mesh);
    });

    // disconnected
    connection.on("error", () => {
      console.log(`disconnected from peer ${id}`);
      peer.connected = false;
      connection.destroy();
      scene.remove(peer.mesh);
      this.delete(id);
    });

    // signaling
    connection.on("signal", (signal) => {
      this.client.network?.ws.sendEvent({
        type: "SIGNAL",
        json: {
          id,
          signal,
        },
      });
    });

    this.set(id, peer);
  };

  dispose = () => {
    this.forEach((peer) => {
      peer.connection.destroy();
    });
  };

  broadcast = (event: any) => {
    const encoded = Network.encode(event);

    this.forEach((peer) => {
      if (peer.connected) {
        peer.connection.send(encoded);
      }
    });
  };

  tick = () => {
    const { name, controls, peers } = this.client;

    if (peers.size > 0) {
      const { object } = controls;
      const {
        position: { x: px, y: py, z: pz },
        quaternion: { x: qx, y: qy, z: qz, w: qw },
      } = object;

      peers.broadcast({
        type: "PEER",
        peer: {
          name,
          px,
          py,
          pz,
          qx,
          qy,
          qz,
          qw,
        },
      });
    }

    this.forEach((peer) => {
      peer.tick();
    });
  };
}

export type { PeersParams };

export { Peers };
