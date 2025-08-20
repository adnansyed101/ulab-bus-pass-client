import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Repeat, DollarSign } from "lucide-react";

interface TripCardProps {
  from: string;
  to: string;
  departureTime: string;
  frequency: string;
  price: number;
  currency?: string;
}

export function TripCard({
  from,
  to,
  departureTime,
  frequency,
  price,
  currency = "USD",
}: TripCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="text-muted-foreground text-sm font-medium">
            From
          </span>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground text-sm font-medium">To</span>
        </CardTitle>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg">{from}</span>
          <span className="font-semibold text-lg">{to}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Departure</span>
          <Badge variant="secondary" className="ml-auto">
            {departureTime}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Repeat className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Frequency</span>
          <Badge variant="outline" className="ml-auto">
            {frequency}
          </Badge>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Price per ticket
          </span>
          <span className="ml-auto font-semibold text-lg text-primary">
            ${price.toFixed(2)} {currency}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
