"use client";

import Image from "next/image";
import { redirect, useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";

interface NavigationItemProps {
  id: string |undefined;
  imageUrl: string | undefined;
  name: string | undefined;
};
interface Props {
	config: NavigationItemProps[];
}
export const NavigationItem = ({ config }: Props) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`servers/${config}`);
  };

  return (
    <>
      {config.map(
        ({ id, imageUrl, name }) => id !== undefined && (
            <ActionTooltip side="right" align="center" label={name || ""}>
              <button
                onClick={onClick}
                className="group relative flex items-center"
              >
                <div
                  className={cn(
                    "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
                    params?.serverId !== id.toString() &&
                      "group-hover:h-[20px]",
                    params?.serverId === id.toString() ? "h-[36px]" : "h-[8px]"
                  )}
                />
                <div
                  className={cn(
                    "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
                    params?.serverId === id.toString() &&
                      "bg-primary/10 text-primary rounded-[16px]"
                  )}
                >
                  <Image fill src={`${imageUrl}`} alt="Channel" />
                </div>
              </button>
            </ActionTooltip>
          )
)}
      </>
  );
};
