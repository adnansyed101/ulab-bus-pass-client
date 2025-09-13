import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart"

// Sample data for monthly spending (last 12 months)
const monthlySpendingData = [
  { month: "Jan", amount: 1250 },
  { month: "Feb", amount: 1180 },
  { month: "Mar", amount: 1420 },
  { month: "Apr", amount: 1350 },
  { month: "May", amount: 1580 },
  { month: "Jun", amount: 1200 },
  { month: "Jul", amount: 980 },
  { month: "Aug", amount: 1100 },
  { month: "Sep", amount: 1650 },
  { month: "Oct", amount: 1480 },
  { month: "Nov", amount: 1320 },
  { month: "Dec", amount: 1750 },
]

const chartConfig = {
  amount: {
    label: "Monthly Spending",
    color: "hsl(var(--chart-2))",
  },
}

export default function MonthlySpendingChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Monthly Spending</CardTitle>
        <CardDescription>Amount spent on transportation tickets per month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlySpendingData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
              <ChartTooltip content={<ChartTooltipContent />} formatter={(value) => [`Tk ${value}`, " Amount Spent"]} />
              <Bar dataKey="amount" fill="var(--color-amount)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
