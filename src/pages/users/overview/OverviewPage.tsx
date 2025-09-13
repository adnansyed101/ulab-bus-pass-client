import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DailyTripsChart from "./components/daily-trips-chart";
import MonthlySpendingChart from "./components/monthly-spending-chart";

const OverviewPage = () => {
  const cardContents = [
    {
      title: "Total Trips Remaining",
      amount: 10,
    },
    {
      title: "Total Trips Used",
      amount: 10,
    },
    {
      title: "Total Trips Amount Paid",
      amount: 10,
    },
    {
      title: "Total Trips Purchased",
      amount: 10,
    },
  ];

  return (
    <>
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
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-black font-sans text-foreground mb-2">
            Dashboard
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Track your transportation usage and spending patterns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DailyTripsChart />
          <MonthlySpendingChart />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
