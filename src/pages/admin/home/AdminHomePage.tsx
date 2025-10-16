import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MonthlyTripsSoldChart from "./components/monthly-trips-sold-chart";
import MonthlyTripsUsedChart from "./components/monthly-trips-used-chart";

const AdminHomePage = () => {
  const cardContents = [
    {
      title: "Total revenue",
      amount: 10,
    },
    {
      title: "Total Trips Sold",
      amount: 10,
    },
    {
      title: "Total Users",
      amount: 10,
    },
    {
      title: "Total Trips Being Used",
      amount: 10,
    },
  ];

  return (
    <>
      <div className="mb-4">
        <h3 className="text-3xl font-black font-sans text-foreground mb-2">
          Dashboard
        </h3>
        <p className="text-lg text-muted-foreground font-sans">
          Track your transportation usage and spending patterns
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardContents.map((content, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{content.title}</CardTitle>
              <CardDescription className="text-xl text-blue-400 font-semibold">
                {content.amount}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      {/* Analytics section with daily trips and monthly spending charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlyTripsSoldChart />
        <MonthlyTripsUsedChart />
      </div>
    </>
  );
};

export default AdminHomePage;
