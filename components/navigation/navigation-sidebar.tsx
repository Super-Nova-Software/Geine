'use client';
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { NavigationAction } from "./navigation-action";
import { useGetServersQuery } from "@/redux/features/serverApiSlice";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { UserButton } from "../userbutton";
import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { NavigationItem } from "./navigation-item";


export const NavigationSidebar = () => {
  const { data: servers } = useGetServersQuery();
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  // if (!isAuthenticated) {
  //   return redirect("/auth/login");
  // }

	const userconfig = [
		{
			id: user?.id,
			name: user?.first_name,
			avatar_url: user?.avatar_url,
		},
	];

	const serversconfig = [
		{
			id: servers?.id,
			name: servers?.name,
			imageUrl: servers?.image_url,
		},
	];

  console.log("config",servers)
  // console.log(servers)
  // console.log(user)
  return (
    <div
      className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3"
    >
      <NavigationAction />
      <Separator
        className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
      />
      <ScrollArea className="flex-1 w-full">  
          <div className="mb-4">
            <NavigationItem config={serversconfig} />
          </div>
      
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
       <UserButton config={userconfig} />
      </div>
    </div>
  )
}