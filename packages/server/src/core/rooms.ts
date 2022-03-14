import http from "http";

import WebSocket from "ws";

import { Server } from "..";
import { ClientEntity } from "../app/client";
import { Room } from "../app/room";

import { Network } from "./network";
import { ClientFilter, defaultFilter } from "./shared";

type RoomsParams = {
  maxClients: number;
  pingInterval: number;
  updateInterval: number;
};

class Rooms extends Map<string, Room> {
  constructor(public server: Server, public params: RoomsParams) {
    super();

    const { network } = this.server;

    network.wss.on(
      "connection",
      (client: WebSocket, req: http.IncomingMessage) => {
        const roomId = new URLSearchParams(req.url.split("?")[1]).get("room");
        const room = this.get(roomId);

        if (!room) {
          console.warn("Room not found.");
          return;
        }

        room.onConnect(client);
      }
    );

    network.app.get("/has-room", (req, res) => {
      res.json(this.has(req.query.room as string));
    });

    network.app.get("/rooms", (_, res) => {
      const rooms = [];
      this.forEach((room) => {
        rooms.push({
          name: room.name,
          clients: Array.from(room.clients.values()).map((c) => c.id),
        });
      });
      res.json(rooms);
    });
  }

  createRoom = (name: string) => {
    const { maxClients, pingInterval, updateInterval } = this.params;

    const room = new Room({
      name,
      maxClients,
      pingInterval,
      updateInterval,
    });

    this.set(name, room);

    return room;
  };

  findClient = (id: string) => {
    for (const [, room] of Array.from(this)) {
      const client = room.clients.get(id);
      if (client) return client;
    }
    return null;
  };

  broadcast = (event: any, filter: ClientFilter = defaultFilter) => {
    this.filterClients(filter, (client) => {
      client.send(event);
    });
  };

  private filterClients = (
    { roomId, exclude, include }: ClientFilter,
    func: (client: ClientEntity) => void
  ) => {
    include = include || [];
    exclude = exclude || [];

    const pass = (client: ClientEntity) => {
      if (include.length !== 0) {
        return include.includes(client.id);
      } else if (exclude.length !== 0) {
        return !exclude.includes(client.id);
      } else {
        return true;
      }
    };

    if (roomId) {
      const room = this.get(roomId);
      if (!room) return [];

      room.clients.forEach((client) => {
        if (pass(client)) func(client);
      });
    } else {
      this.forEach((room) =>
        room.clients.forEach((client) => {
          if (pass(client)) func(client);
        })
      );
    }
  };
}

export { Rooms };
