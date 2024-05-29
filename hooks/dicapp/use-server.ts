import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useRetrieveServerQuery } from "@/redux/features/serverApiSlice";


export function useServer( serverId: string) {
  const { data: dataServer } = useRetrieveServerQuery(serverId);
  const { data: user, isFetching, isError } = useRetrieveUserQuery();



  const textChannels =
    dataServer?.getSer ver?.channels?.filter(
      (channel) => channel?.type === ChannelType.Text
    ) || []

  const audioChannels =
    dataServer?.getServer?.channels?.filter(
      (channel) => channel?.type === ChannelType.Audio
    ) || []

  const videoChannels =
    dataServer?.getServer?.channels?.filter(
      (channel) => channel?.type === ChannelType.Video
    ) || []

  const members =
    dataServer?.getServer?.members?.filter(
      (member) => member?.profileId !== profileId
    ) || []

  const role = dataServer?.getServer?.members?.find(
    (member) => member?.profileId === profileId
  )?.role

  return {
    server: dataServer?.getServer,
    loading,
    textChannels,
    audioChannels,
    videoChannels,
    members,
    role,
  }
}
