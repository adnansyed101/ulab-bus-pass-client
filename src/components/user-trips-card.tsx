import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Ticket } from "lucide-react";

interface UserTripsCardProps {
  id: string;
  destination: string;
  remainingTrips: number;
  departureTime: string;
  pickupTime: string;
  lastPurchaseDate: string;
}

export function UserTripsCard({
  id,
  destination,
  remainingTrips,
  departureTime,
  pickupTime,
  lastPurchaseDate,
}: UserTripsCardProps) {
  const isLowRemaining = remainingTrips <= 2;
  const hasNoTrips = remainingTrips === 0;

  console.log(id);

  return (
    <Card className="w-full max-w-sm bg-card border-border shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold font-sans text-card-foreground flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            {destination}
          </CardTitle>
          <Badge
            variant={
              hasNoTrips
                ? "destructive"
                : isLowRemaining
                ? "secondary"
                : "default"
            }
            className="font-medium"
          >
            <Ticket className="h-3 w-3 mr-1" />
            {remainingTrips} {remainingTrips === 1 ? "trip" : "trips"}
          </Badge>
        </div>
        {lastPurchaseDate && (
          <p className="text-xs text-muted-foreground font-sans">
            Last Purchased: {lastPurchaseDate}
          </p>
        )}
      </CardHeader>

      <CardContent className="space-y-2 flex-1">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium text-card-foreground">Departure</p>
              <p className="text-muted-foreground">{departureTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium text-card-foreground">Pickup</p>
              <p className="text-muted-foreground">{pickupTime}</p>
            </div>
          </div>
        </div>

        {isLowRemaining && remainingTrips > 0 && (
          <div className="bg-secondary/20 border border-secondary rounded-md p-2">
            <p className="text-xs text-secondary-foreground font-medium">
              ⚠️ Only {remainingTrips} {remainingTrips === 1 ? "trip" : "trips"}{" "}
              remaining
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button className="font-medium flex-1" variant="default">
          Pickup
        </Button>
        <Button className="px-3 bg-transparent flex-1" variant="outline">
          Drop Off
        </Button>
      </CardFooter>
    </Card>
  );
}
