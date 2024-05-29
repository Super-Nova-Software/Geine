import { useGetMessagesByChannelQuery } from "@/redux/features/messageApiSlice";
import { useInfiniteQuery } from "@tanstack/react-query";


interface ChatQueryProps {
  queryKey: string;
  paramValue: string;
};

export const useChatQuery = ({
  queryKey,
  paramValue
}: ChatQueryProps) => {

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({ pageParam = undefined }) => useGetMessagesByChannelQuery({ channelId: paramValue }),
    getNextPageParam: (lastPage) => lastPage?.nextCursor,
    initialPageParam: undefined, // Add this line
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
}
