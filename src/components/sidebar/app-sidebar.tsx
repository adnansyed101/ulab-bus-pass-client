import * as React from "react";
import {
  Bus,
  Home,
  ScrollText,
  Search,
  ShoppingCart,
  TableOfContents,
  Ticket,
} from "lucide-react";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
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
  role: "admin",
};

const userLinks = [
  {
    label: "Essential Links",
    items: [
      {
        title: "Home",
        url: "/user/home",
        icon: Home,
        isActive: true,
      },
      {
        title: "Buy Trips",
        url: "/user/buy-trips",
        icon: Ticket,
      },
      {
        title: "Cart",
        url: "/user/cart",
        icon: ShoppingCart,
      },
      {
        title: "Overview",
        url: "/user/overview",
        icon: Search,
      },
      {
        title: "Transaction History",
        url: "/user/transaction-history",
        icon: TableOfContents,
      },
      {
        title: "Location Details",
        url: "/user/location-details",
        icon: ScrollText,
      },
    ],
  },
];

const adminLinks = [
  {
    label: "Essential Links",
    items: [
      {
        title: "Home",
        url: "/admin/home",
        icon: Home,
      },
    ],
  },
  {
    label: "Register",
    items: [
      {
        title: "Bus",
        url: "/admin/home",
        icon: Home,
      },
      {
        title: "Conductor",
        url: "#",
        icon: Home,
      },
      {
        title: "Route",
        url: "#",
        icon: Home,
      },
    ],
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
        {user.role === "user"
          ? userLinks.map((link) => <NavMain key={link.label} links={link} />)
          : adminLinks.map((link) => <NavMain key={link.label} links={link} />)}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
