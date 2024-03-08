use serde::{Deserialize, Serialize};
use specs::{Component, VecStorage};

#[derive(Default, Component, Serialize, Deserialize)]
#[storage(VecStorage)]
pub struct JsonComp(pub String);

impl JsonComp {
    pub fn new() -> Self {
        Self(String::new())
    }
}
