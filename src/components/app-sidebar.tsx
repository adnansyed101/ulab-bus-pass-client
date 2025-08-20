import * as React from "react";
import {
  Bus,
  Home,
  ScrollText,
  Search,
  ShoppingCart,
  TableOfContents,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const user = {
  name: "Md Adnan",
  email: "adnan.adnan.bba@ulab.edu.bd",
  avatar: "/avatars/shadcn.jpg",
};

const navMain = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
    isActive: true,
  },
  {
    title: "Overview",
    url: "#",
    icon: Search,
  },
  {
    title: "Buy Trips",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Transaction History",
    url: "#",
    icon: TableOfContents,
  },
  {
    title: "Location Details",
    url: "#",
    icon: ScrollText,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mt-4">
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Bus className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">ULAB Shuttle Service</span>
            <span className="truncate text-xs">
              University of Liberal Arts Bangladesh
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
