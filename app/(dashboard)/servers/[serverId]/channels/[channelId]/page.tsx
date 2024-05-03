import React from 'react';
import { ChatHeader } from "@/components/chat/chat-header";
import { MediaRoom } from "@/components/media-room";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { useRetrieveChannelsQuery } from "@/redux/features/serverApiSlice";
import { ChannelType } from "@/interfaces/types";

interface ChannelIdPageProps {
  params: {
    serverId: string;
    channelId: string;
  }
}

const ChannelIdPage: React.FC<ChannelIdPageProps> = ({ params }) => {
  const { data: channels, isLoading: channelsLoading, isError: channelsError } = useRetrieveChannelsQuery(params.serverId);

  if (channelsError) {
    return <div>Error fetching channel data</div>;
  }

  if (channelsLoading || !channels) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      {channels.map((channel) => (
        <div key={channel.id}>
          <ChatHeader
            name={channel.name}
            serverId={channel.server}
            type="channel"
          />
          {channel.type === ChannelType.TEXT && (
            <>
              <ChatMessages
                // member={channel.members && channel.members.length > 0 ? channel.members[0] : null} // Check if members exist
                name={channel.name}
                chatId={channel.id}
                type="channel"
                apiUrl="/messages/"
                socketUrl="/api/socket/messages"
                socketQuery={{
                  channelId: channel.id,
                  serverId: channel.server,
                }}
                paramKey="channelId"
                paramValue={channel.id}
              />
              <ChatInput
                name={channel.name}
                type="channel"
                apiUrl="/api/socket/messages"
                query={{
                  channelId: channel.id,
                  serverId: channel.server,
                }}
              />
            </>
          )}
          {channel.type === ChannelType.AUDIO && (
            <MediaRoom
              chatId={channel.id}
              video={false}
              audio={true}
            />
          )}
          {channel.type === ChannelType.VIDEO && (
            <MediaRoom
              chatId={channel.id}
              video={true}
              audio={true}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ChannelIdPage;
