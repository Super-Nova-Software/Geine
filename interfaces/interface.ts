import { ChannelType, MemberRole } from "./types";

export interface User {
   id: string;
	first_name: string;
	last_name: string;
	avatar_url: string;
	email: string;
   servers: Server[];
   is_superuser: boolean;
   is_staff: boolean;
   is_active: boolean;
   groups: any[];
   user_permissions: any[];
}


export interface Server {
   id: string;
   name: string;
   image_url: string;
   invite_code: string;
   channels: Channel[];
   members: Member[];
   created_at: Date;
   updated_at: Date;
   is_active: boolean;
}
export interface Channel {
   id: string;
   name: string;
   type: ChannelType;
   profile: User;
   server: string;
   created_at: Date;
   updated_at: Date;
}
export interface Member {
   id: string;
   role: MemberRole;
   profile: User[];
   server: Server;
   created_at: Date;
   updated_at: Date;
}

export interface Message {
   id: string;
   content: string;
   file_url: string;
   member: Member;
   channel: Channel;
   deleted: Boolean;
   created_at: Date;
   updated_at: Date;
}



