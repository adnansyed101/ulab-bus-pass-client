import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for daily trip usage (last 30 days)
const dailyTripsData = [
  { date: "Jan 1", trips: 45 },
  { date: "Jan 2", trips: 52 },
  { date: "Jan 3", trips: 38 },
  { date: "Jan 4", trips: 61 },
  { date: "Jan 5", trips: 55 },
  { date: "Jan 6", trips: 42 },
  { date: "Jan 7", trips: 35 },
  { date: "Jan 8", trips: 58 },
  { date: "Jan 9", trips: 67 },
  { date: "Jan 10", trips: 49 },
  { date: "Jan 11", trips: 53 },
  { date: "Jan 12", trips: 44 },
  { date: "Jan 13", trips: 39 },
  { date: "Jan 14", trips: 41 },
  { date: "Jan 15", trips: 62 },
  { date: "Jan 16", trips: 58 },
  { date: "Jan 17", trips: 51 },
  { date: "Jan 18", trips: 46 },
  { date: "Jan 19", trips: 54 },
  { date: "Jan 20", trips: 48 },
  { date: "Jan 21", trips: 43 },
  { date: "Jan 22", trips: 59 },
  { date: "Jan 23", trips: 65 },
  { date: "Jan 24", trips: 52 },
  { date: "Jan 25", trips: 47 },
  { date: "Jan 26", trips: 56 },
  { date: "Jan 27", trips: 50 },
  { date: "Jan 28", trips: 44 },
  { date: "Jan 29", trips: 57 },
  { date: "Jan 30", trips: 63 },
]

const chartConfig = {
  trips: {
    label: "Daily Trips",
    color: "hsl(var(--chart-1))",
  },
}

export default function DailyTripsChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Daily Trip Usage</CardTitle>
        <CardDescription>Number of trips used per day over the last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dailyTripsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} interval="preserveStartEnd" />
              <YAxis tick={{ fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="trips"
                stroke="var(--color-trips)"
                strokeWidth={2}
                dot={{ fill: "var(--color-trips)", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
