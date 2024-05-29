import { ChannelType } from "./types";

export interface User {
   id?: number;
   last_login?: Date | null;
   username?: string;
   first_name?: string;
   last_name?: string;
   email?: string;
   avatar?: string;
   user_role?: UserRole;
   server_role?: Role;
   bio?: string | null;
   created_at?: Date;
   updated_at?: Date;
}

export interface Role {
   id?: number;
   server?: string;
   name?: Date | null;
   color?: string;
   permissions?: string;
   position?: string;
   created_at?: Date;
   updated_at?: Date;
}
export interface UserRole {
   id?: number;
   user?: string;
   role?: Role;
   assigned_at?: Date;
}
export interface Ban {
   id?: number;
   user?: string;
   server?: Server;
   reason?: string;
   banned_at?: Date;
}

export interface Server {
   id: string;
   name?: string;
   owner?: string; // userId
   icon_url?: string;
   role?: Role;
   Server_Settings?:ServerSettings;
   ServerCategory?: ServerCategory[];
   created_at?: Date;
   updated_at?: Date;
}

export interface ServerCategory {
   id: string;
   server: Server;
   name?: string;
   position?: string;
   created_at?: Date;
   updated_at?: Date;
}
export interface ServerSettings {
   id: string;
   server: Server;
   setting_key?: string;
   setting_value?: string;
}
export interface VerificationLevel {
   id: string;
   server: Server;
   level?: string;
   created_at?: Date;
   updated_at?: Date;
}
export interface ServerFeature {
   id: string;
   server: Server;
   feature?: string;
   enabled?: Boolean;
   created_at?: Date;
}

export interface ChannelSettings {
   id: string;
   channel: Server;
   setting_key?: string;
   setting_value?: string;
}

export interface Thread {
   id: string;
   channel: string;
   parent_id?: string;
   name?: string;
   archived?: string;
   created_at: Date;
   updated_at: Date;
}

export interface ThreadMember {
   id: string;
   thread: string;
   user?: string;
   joined_at?: Date;
}

export interface Channel {
   id: string;
   name: string;
   server: Server;
   ServerCategory?: ServerCategory;
   type: ChannelType;
   position?: string;
   created_at: Date;
   updated_at: Date;
}

export interface Message {
   id: string;
   user?: string;
   channel?: string;
   content: string;
   timestamp: Date;
   edited_timestamp: Date;
   Media?: Media;
   deleted: Boolean;
}

export interface VoiceState {
   id: string;
   user?: string;
   channel?: string;
   session_id: string;
   self_mute: Date;
   self_deaf: Date;
   created_at?: Media;
   updated_at: Boolean;
}

export interface DirectMessage {
   id: string;
   sender: User | any;
   recipient?: string;
   channelId?: string;
   content?: string;
   timestamp?: string;
   Media?: Media;
}
export interface Media {
   id: string;
   message: Message;
   url?: string;
   image_url?: string;
   type?: string;
   uploaded_at?: string;
}
export interface Pin {
   id: string;
   channel: Message;
   message?: string;
   pinned_at?: Date;
}

/* Redux */
export interface AuthState {
   access: string | null;
   refresh: string | null;
   isAuthenticated: boolean;
   isLoading: boolean;
   user: User | null;
}