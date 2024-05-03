import {
	Cloud,
	CreditCard,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
  } from "lucide-react"
  
  import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import {  logout as setLogout } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useLogoutMutation } from "@/redux/features/authApiSlice";
  interface Config {
	id: string | undefined;
	name: string | undefined;
	avatar_url: string | undefined;
}

interface Props {
	config: Config[];
}
export function UserButton({ config }: Props) {
	const dispatch = useAppDispatch();
	const [logout] = useLogoutMutation();

const handleLogout = () => {
logout(undefined)
	.unwrap()
	.then(() => {
		dispatch(setLogout());
	});
};
	return (
		<>
	{config.map(({ name, avatar_url }) => (
	  <DropdownMenu>
		<DropdownMenuTrigger asChild>
		   <Avatar>
              <AvatarImage src={`${avatar_url}`} alt={name} />
              <AvatarFallback>{name}</AvatarFallback>
           </Avatar>
		</DropdownMenuTrigger>
		<DropdownMenuContent className="w-56">
		  <DropdownMenuLabel>My Account</DropdownMenuLabel>
		  <DropdownMenuSeparator />
		  <DropdownMenuGroup>
			<DropdownMenuItem>
			  <User className="mr-2 h-4 w-4" />
			  <span>Profile</span>
			  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
			</DropdownMenuItem>
			{/* <DropdownMenuItem>
			  <CreditCard className="mr-2 h-4 w-4" />
			  <span>Billing</span>
			  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
			</DropdownMenuItem> */}
			<DropdownMenuItem>
			  <Settings className="mr-2 h-4 w-4" />
			  <span>Settings</span>
			  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
			</DropdownMenuItem>
			<DropdownMenuItem>
			  <Keyboard className="mr-2 h-4 w-4" />
			  <span>Keyboard shortcuts</span>
			  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
			</DropdownMenuItem>
		  </DropdownMenuGroup>
		  <DropdownMenuSeparator />
		  <DropdownMenuGroup>
			{/* <DropdownMenuItem>
			  <Users className="mr-2 h-4 w-4" />
			  <span>Team</span>
			</DropdownMenuItem> */}
			<DropdownMenuSub>
			  <DropdownMenuSubTrigger>
				<UserPlus className="mr-2 h-4 w-4" />
				<span>Invite users</span>
			  </DropdownMenuSubTrigger>
			  <DropdownMenuPortal>
				<DropdownMenuSubContent>
				  <DropdownMenuItem>
					<Mail className="mr-2 h-4 w-4" />
					<span>Email</span>
				  </DropdownMenuItem>
				  <DropdownMenuItem>
					<MessageSquare className="mr-2 h-4 w-4" />
					<span>Message</span>
				  </DropdownMenuItem>
				  <DropdownMenuSeparator />
				  <DropdownMenuItem>
					<PlusCircle className="mr-2 h-4 w-4" />
					<span>More...</span>
				  </DropdownMenuItem>
				</DropdownMenuSubContent>
			  </DropdownMenuPortal>
			</DropdownMenuSub>
			{/* <DropdownMenuItem>
			  <Plus className="mr-2 h-4 w-4" />
			  <span>New Team</span>
			  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
			</DropdownMenuItem> */}
		  </DropdownMenuGroup>
		  <DropdownMenuSeparator />
		  {/* <DropdownMenuItem>
			<Github className="mr-2 h-4 w-4" />
			<span>GitHub</span>
		  </DropdownMenuItem> */}
		  <DropdownMenuItem>
			<LifeBuoy className="mr-2 h-4 w-4" />
			<span>Support</span>
		  </DropdownMenuItem>
		  <DropdownMenuSeparator />
		  <DropdownMenuItem>
			<LogOut className="mr-2 h-4 w-4" />
			<span onClick={handleLogout}>Log out</span>
			<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
		  </DropdownMenuItem>
		</DropdownMenuContent>
	  </DropdownMenu>
		))}
	  </>
	)
  }
  