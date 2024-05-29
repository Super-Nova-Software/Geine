import { Home,Search,Heart,SquarePen,Users,User,Tag,Redo,BotMessageSquare } from 'lucide-react';

export const sidebarLinks = [
  {
    lucideICON: <Home/>,
    route: "/",
    label: "Home",
  },
  {
    lucideICON: <Search />,
    route: "/search",
    label: "Search",
  },
  {
    lucideICON: <Heart />,
    route: "/activity",
    label: "Activity",
  },
  {
    lucideICON: <SquarePen />,
    route: "/create-info",
    label: "Create Info",
  },
  {
    lucideICON: <Users />,
    route: "/Sessions",
    label: "Sessions",
  },
  {
    lucideICON:<BotMessageSquare  />,
    route: "/profile",
    label: "Initial diagnosis",
  },
  {
    lucideICON:<User />,
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs = [
  { value: "threads", label: "Posts", icon: <Redo   /> },
  { value: "replies", label: "Replies", icon: <Users /> },
  { value: "tagged", label: "Tagged", icon: <Tag /> },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: <Redo   /> },
  { value: "members", label: "Members", icon: <Users />  },
  { value: "requests", label: "Requests", icon: <Users /> },
];
