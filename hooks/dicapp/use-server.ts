import { serverApiSlice } from "@/redux/features/serverApiSlice";


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
