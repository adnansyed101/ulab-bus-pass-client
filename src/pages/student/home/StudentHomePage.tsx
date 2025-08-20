import { AppSidebar } from "@/components/app-sidebar";
import ModeToggle from "@/components/shared/header/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserTripsCard } from "@/components/user-trips-card";

const StudentHomePage = () => {
  const remainingTrips = [
    {
      id: "1",
      destination: "Dhanmondi",
      remainingTrips: 1,
      departureTime: "8:30PM",
      pickupTime: "7:20AM",
      lastPurchaseDate: "Nov  25, 2025",
    },
    {
      id: "2",
      destination: "Mirpur 12",
      remainingTrips: 0,
      departureTime: "8:30PM",
      pickupTime: "7:20AM",
      lastPurchaseDate: "Nov  25, 2025",
    },
    {
      id: "3",
      destination: "Sign Board",
      remainingTrips: 20,
      departureTime: "8:30PM",
      pickupTime: "7:20AM",
      lastPurchaseDate: "Nov  25, 2025",
    },
    {
      id: "4",
      destination: "Lalbagh",
      remainingTrips: 10,
      departureTime: "8:30PM",
      pickupTime: "7:20AM",
      lastPurchaseDate: "Nov  25, 2025",
    },
  ];

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <ModeToggle />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <h3 className="text-lg pl-4 font-medium tracking-wide">
              Take a Trip.
            </h3>
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
              {remainingTrips.length > 0 ? (
                remainingTrips.map((trips) => <UserTripsCard {...trips} />)
              ) : (
                <h2 className="pl-2">No Trips Purchased/Remaining</h2>
              )}
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default StudentHomePage;
