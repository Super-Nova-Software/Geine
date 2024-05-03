import { Member, User,Server } from "@/interfaces/interface";
import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";


export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: User })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};