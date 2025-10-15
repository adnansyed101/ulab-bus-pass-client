import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// busRoutes.ts
export const busRoutes = [
  {
    route: "Dhanmondi 4/A to ULAB",
    trips: [
      { day: "Friday (Graduate Class)", from: "8:50 AM", to: "12:40 PM" },
      { day: "Friday (Graduate Class)", from: "1:30 PM", to: "5:15 PM" },
      { day: "Friday (Graduate Class)", from: "2:30 PM", to: "6:10 PM" },
      { day: "Friday (Graduate Class)", from: "5:40 PM", to: "9:30 PM" },

      { day: "Saturday", from: "7:20 AM", to: "9:35 AM" },
      { day: "Saturday", from: "8:30 AM", to: "12:20 PM" },
      { day: "Saturday", from: "10:10 AM", to: "2:00 PM" },
      { day: "Saturday", from: "1:10 PM", to: "4:30 PM" },
      { day: "Saturday", from: "2:30 PM", to: "6:10 PM" },
      { day: "Saturday", from: "5:30 PM", to: "9:30 PM" },

      { day: "Sunday to Thursday", from: "7:20 AM", to: "9:35 AM" },
      { day: "Sunday to Thursday", from: "8:30 AM", to: "11:00 AM" },
      { day: "Sunday to Thursday", from: "10:10 AM", to: "1:50 PM" },
      { day: "Sunday to Thursday", from: "11:40 AM", to: "3:15 PM" },
      { day: "Sunday to Thursday", from: "2:30 PM", to: "4:40 PM" },
      { day: "Sunday to Thursday", from: "3:50 PM", to: "6:05 PM" },
    ],
  },
  {
    route: "Mirpur Section 12 to ULAB",
    trips: [
      {
        stop: "Mirpur Section 12 Circle (Bus Stand)",
        trip1: "7:00 AM",
        trip2: "N/A",
      },
      { stop: "Mirpur 11 (Rupali Bank)", trip1: "7:05 AM", trip2: "N/A" },
      { stop: "Mirpur 10 Circle (BATA)", trip1: "7:10 AM", trip2: "11:10 AM" },
      {
        stop: "Sony Cinema Hall (BRAC Bank)",
        trip1: "7:15 AM",
        trip2: "11:15 AM",
      },
      { stop: "Ansar Camp Bus Stand", trip1: "7:20 AM", trip2: "11:20 AM" },
      { stop: "Technical Bus Stand", trip1: "7:25 AM", trip2: "11:25 AM" },
      { stop: "Kallyanpur Bus Stand", trip1: "7:30 AM", trip2: "11:30 AM" },
      {
        stop: "Shyamoli Square Bus Stand",
        trip1: "7:35 AM",
        trip2: "11:35 AM",
      },
      {
        stop: "Shia Masjid / Krishi Market",
        trip1: "7:40 AM",
        trip2: "11:40 AM",
      },
      { stop: "ULAB (Arrival)", trip1: "7:45 AM", trip2: "11:45 AM" },
    ],
    returnTrips: [
      { stop: "ULAB (Departure)", trip1: "9:30 AM", trip2: "6:05 PM" },
    ],
  },
  {
    route: "Sign Board via Palashi to ULAB",
    trips: [
      { stop: "Sign Board", trip1: "6:30 AM", trip2: "" },
      { stop: "Shonir Akhra", trip1: "6:35 AM", trip2: "" },
      { stop: "Chankharpul", trip1: "6:40 AM", trip2: "11:00 AM" },
      { stop: "Palashi Circle", trip1: "6:45 AM", trip2: "11:05 AM" },
      { stop: "Azimpur Bus Stand", trip1: "6:50 AM", trip2: "11:10 AM" },
      { stop: "Labaid Bus Stand", trip1: "6:55 AM", trip2: "11:10 AM" },
      { stop: "Kalabagan Bus Stand", trip1: "7:00 AM", trip2: "11:15 AM" },
      { stop: "Sobhanbagh Masjid", trip1: "7:05 AM", trip2: "11:20 AM" },
      {
        stop: "Bangladesh Eye Hospital, Dhanmondi",
        trip1: "7:10 AM",
        trip2: "11:25 AM",
      },
      { stop: "ULAB (Arrival)", trip1: "7:30 AM", trip2: "11:30 AM" },
    ],
    returnTrips: [
      { stop: "ULAB (Departure)", trip1: "9:30 AM", trip2: "6:05 PM" },
    ],
  },
];

interface Schedule {
  day: string;
  from: string;
  to: string;
}

interface Route {
  stop: string;
  trip1: string;
  trip2: string;
}

type TransportData = Schedule | Route;

type TripsData = {
  route: string;
  trips: TransportData[];
  returnTrips?: Route[];
};

const LocationDetailsPage = () => {
  return (
    <section className="min-h-screen">
      <div className="space-y-10">
        {busRoutes.map((route: TripsData, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-3">Route: {route.route}</h2>

            {/* Main Trip Table */}
            <Table>
              <TableCaption>{route.route}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Stoppage / Day</TableHead>
                  <TableHead>1st Trip</TableHead>
                  <TableHead>2nd Trip</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {route.trips.map((trip, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      {"stop" in trip ? trip.stop : trip.day}
                    </TableCell>
                    <TableCell>
                      {"trip1" in trip ? trip.trip1 : trip.from}
                    </TableCell>
                    <TableCell>
                      {"trip2" in trip ? trip.trip2 : trip.to}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Return Trips if Available */}
            {route.returnTrips && (
              <Table className="mt-6">
                <TableCaption>
                  Return Trip: {route.route.split(" to ")[1]} →{" "}
                  {route.route.split(" to ")[0]}
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Stoppage</TableHead>
                    <TableHead>1st Trip</TableHead>
                    <TableHead>2nd Trip</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {route.returnTrips.map((trip, i) => (
                    <TableRow key={i}>
                      <TableCell>{trip.stop}</TableCell>
                      <TableCell>{trip.trip1}</TableCell>
                      <TableCell>{trip.trip2}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationDetailsPage;
