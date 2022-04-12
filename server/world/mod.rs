mod block;
mod client;
mod config;
mod registry;

use hashbrown::HashMap;
use message_io::{network::Endpoint, node::NodeHandler};
use nanoid::nanoid;
use specs::{
    shred::{Fetch, FetchMut, Resource},
    Dispatcher, DispatcherBuilder, World as ECSWorld, WorldExt,
};

use crate::server::models::{encode_message, Message, MessageType};

use super::common::ClientFilter;

pub use self::config::WorldConfig;
use self::{client::Client, registry::Registry};

pub type Clients = HashMap<Endpoint, Client>;

/// A voxelize world.
#[derive(Default)]
pub struct World {
    /// ID of the world, generated from `nanoid!()`.
    pub id: String,

    /// Name of the world, used for connection.
    pub name: String,

    /// Entity component system world.
    ecs: ECSWorld,

    dispatcher: Option<fn() -> Dispatcher<'static, 'static>>,
}

fn get_default_dispatcher() -> Dispatcher<'static, 'static> {
    DispatcherBuilder::new().build()
}

impl World {
    /// Create a new voxelize world.
    pub fn new(name: &str, config: &WorldConfig) -> Self {
        let id = nanoid!();

        let mut ecs = ECSWorld::new();

        ecs.insert(name.to_owned());
        ecs.insert(config.clone());

        ecs.insert(Registry::new());
        ecs.insert(Clients::new());

        Self {
            id,
            name: name.to_owned(),

            ecs,

            dispatcher: Some(get_default_dispatcher),

            ..Default::default()
        }
    }

    /// Get a reference to the ECS world.
    pub fn ecs(&self) -> &ECSWorld {
        &self.ecs
    }

    /// Get a mutable reference to the ECS world
    pub fn ecs_mut(&mut self) -> &mut ECSWorld {
        &mut self.ecs
    }

    /// Read an ECS resource generically
    pub fn read_resource<T: Resource>(&self) -> Fetch<T> {
        self.ecs.read_resource::<T>()
    }

    /// Write an ECS resource generically
    pub fn write_resource<T: Resource>(&mut self) -> FetchMut<T> {
        self.ecs.write_resource::<T>()
    }

    /// Check if the world has a specific client at endpoint
    pub fn has_client(&self, endpoint: &Endpoint) -> bool {
        self.clients().contains_key(endpoint)
    }

    /// Add a client to the world, with ID generated with `nanoid!()`.
    pub fn add_client(&mut self, endpoint: &Endpoint) -> String {
        let id = nanoid!();

        self.clients_mut()
            .insert(endpoint.clone(), Client { id: id.to_owned() });

        id
    }

    /// Remove a client from the world by endpoint.
    pub fn remove_client(&mut self, endpoint: &Endpoint) -> Option<Client> {
        self.clients_mut().remove(endpoint)
    }

    pub fn set_dispatcher(&mut self, dispatch: fn() -> Dispatcher<'static, 'static>) {
        self.dispatcher = Some(dispatch);
    }

    /// Handler for protobuf requests from clients.
    pub fn on_request(&mut self, endpoint: &Endpoint, data: Message) {
        let msg_type = MessageType::from_i32(data.r#type).unwrap();

        match msg_type {
            MessageType::Peer => self.on_peer(endpoint, data),
            MessageType::Chunk => self.on_chunk(endpoint, data),
            MessageType::Signal => self.on_signal(endpoint, data),
            _ => {}
        }
    }

    /// Broadcast a protobuf message to a subset or all of the clients in the world.
    pub fn broadcast(&mut self, data: Message, filter: ClientFilter) {
        let encoded = encode_message(&data);

        self.clients().iter().for_each(|(endpoint, client)| {
            match &filter {
                ClientFilter::All => {}
                ClientFilter::Include(ids) => {
                    if !ids.iter().any(|i| *i == *client.id) {
                        return;
                    }
                }
                ClientFilter::Exclude(ids) => {
                    if ids.iter().any(|i| *i == *client.id) {
                        return;
                    }
                }
            };

            // TODO: check if is error
            self.handler().network().send(*endpoint, &encoded);
        });
    }

    /// Tick of the world, run every 16ms.
    pub fn tick(&mut self) {
        if self.is_empty() {
            return;
        }

        let mut dispatcher = self.dispatcher.unwrap()();
        dispatcher.dispatch(&self.ecs);

        self.ecs.maintain();
    }

    /// Access to the network handler.
    pub fn handler(&self) -> Fetch<NodeHandler<()>> {
        self.read_resource::<NodeHandler<()>>()
    }

    /// Access to the world's config.
    pub fn config(&self) -> Fetch<WorldConfig> {
        self.read_resource::<WorldConfig>()
    }

    /// Access all clients in the ECS world.
    pub fn clients(&self) -> Fetch<Clients> {
        self.read_resource::<Clients>()
    }

    /// Access a mutable clients map in the ECS world.
    pub fn clients_mut(&mut self) -> FetchMut<Clients> {
        self.write_resource::<Clients>()
    }

    /// Access the registry in the ECS world.
    pub fn registry(&self) -> Fetch<Registry> {
        self.read_resource::<Registry>()
    }

    /// Access a mutable registry in the ECS world.
    pub fn registry_mut(&mut self) -> FetchMut<Registry> {
        self.write_resource::<Registry>()
    }

    /// Check if this world is empty
    pub fn is_empty(&self) -> bool {
        let clients = self.read_resource::<Clients>();
        clients.is_empty()
    }

    /// Handler for `Peer` type messages.
    fn on_peer(&mut self, endpoint: &Endpoint, data: Message) {}

    /// Handler for `Signal` type messages.
    fn on_signal(&mut self, endpoint: &Endpoint, data: Message) {}

    /// Handler for `Chunk` type messages.
    fn on_chunk(&mut self, endpoint: &Endpoint, data: Message) {}
}
