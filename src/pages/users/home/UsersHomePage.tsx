import { Separator } from "@radix-ui/react-dropdown-menu";
import ShowCards from "./components/show-cards";
import { BusSeatLayout } from "@/components/bus-seat-layout";

const UsersHomePage = () => {
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
      <h3 className="text-lg pl-4 font-medium tracking-wide">Take a Trip.</h3>
      <div className="grid auto-rows-min gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        <ShowCards cardData={remainingTrips} />
      </div>

      <Separator className="my-2" />

      <div className="min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 flex-1 rounded-xl md:min-h-min">
        {["Bus 1", "Bus 2", "Bus 3", "Bus 4"].map((bus) => (
          <div key={bus}>
            <h2 className="text-center text-2xl font-semibold mb-2">{bus}</h2>
            <BusSeatLayout
              key={bus}
              occupiedSeats={[1, 3, 7, 12, 15, 18, 22, 28, 31, 35, 39]}
              onSeatSelect={(seatId) => console.log(`Seat ${seatId} selected`)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersHomePage;
