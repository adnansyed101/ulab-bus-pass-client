import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Calendar, DollarSign } from "lucide-react";

interface DestinationCardProps {
  destination: string;
  remainingTrips: number;
  nextDepartureTime: string;
  nextPickupTime: string;
  price: number;
  frequency: string;
  description?: string;
}

export function DestinationCard({
  destination,
  remainingTrips,
  nextDepartureTime,
  nextPickupTime,
  price,
  frequency,
  description,
}: DestinationCardProps) {
  const isLowAvailability = remainingTrips <= 5;
  const isSoldOut = remainingTrips === 0;

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
              isSoldOut
                ? "destructive"
                : isLowAvailability
                ? "secondary"
                : "default"
            }
            className="font-medium"
          >
            {isSoldOut ? "Sold Out" : `${remainingTrips} left`}
          </Badge>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground font-sans">
            {description}
          </p>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium text-card-foreground">Departure</p>
              <p className="text-muted-foreground">{nextDepartureTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium text-card-foreground">Pickup</p>
              <p className="text-muted-foreground">{nextPickupTime}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{frequency}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-lg font-bold text-card-foreground">
              {price.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full font-medium"
          disabled={isSoldOut}
          variant={isSoldOut ? "secondary" : "default"}
        >
          {isSoldOut ? "Sold Out" : "Confirm Trip"}
        </Button>
      </CardFooter>
    </Card>
  );
}
