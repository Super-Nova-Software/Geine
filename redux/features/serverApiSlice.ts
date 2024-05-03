import { Channel, Server } from '@/interfaces/interface';
import { apiSlice } from '../services/apiSlice';


interface CreateServerResponse {
  success: boolean;
  server: Server;
}

const serverApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveServer: builder.query<Server, string>({
      query: (serverId) => `/servers/${serverId}/`,
    }),
    getServers: builder.query<Server, void>({
      query: () => '/servers/',
    }),
    createServer: builder.mutation<CreateServerResponse, Partial<Server>>({
      query: (server) => ({
        url: '/servers/',
        method: 'POST',
        body: server,
      }),
    }),
    updateServer: builder.mutation<Server, Partial<Server>>({
      query: (server) => ({
        url: `/servers/${server.id}/`,
        method: 'PUT',
        body: server,
      }),
    }),
    deleteServer: builder.mutation<void, string>({
      query: (serverId) => ({
        url: `/servers/${serverId}/`,
        method: 'DELETE',
      }),
    }),
    retrieveChannels: builder.query<Channel[], string>({
      query: (serverId) => `/servers/${serverId}/channels/`,
    }),
    createChannel: builder.mutation<Channel, Partial<Channel>>({
      query: (channel) => ({
        url: '/channels/',
        method: 'POST',
        body: channel,
      }),
    }),
    updateChannel: builder.mutation<Channel, Partial<Channel>>({
      query: (channel) => ({
        url: `/channels/${channel.id}/`,
        method: 'PUT',
        body: channel,
      }),
    }),
    deleteChannel: builder.mutation<void, string>({
      query: (channelId) => ({
        url: `/channels/${channelId}/`,
        method: 'DELETE',
      }),
    }),
  }),  
});

export const {
  useGetServersQuery,
  useRetrieveServerQuery,
  useCreateServerMutation,
  useUpdateServerMutation,
  useDeleteServerMutation,
  useRetrieveChannelsQuery,
  useCreateChannelMutation,
  useUpdateChannelMutation,
  useDeleteChannelMutation,
} = serverApiSlice;
