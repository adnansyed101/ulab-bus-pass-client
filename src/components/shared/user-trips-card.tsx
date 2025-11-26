"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MapPin, Clock, Ticket, ChevronDown } from "lucide-react";
import { useState } from "react";

interface UserTripsCardProps {
  id: string;
  destination: string;
  remainingTrips: number;
  purchaseDate?: string;
  availablePickupTimes?: string[];
  availableDropOffTimes?: string[];
}

export function UserTripsCard({
  destination,
  remainingTrips,
  purchaseDate,
  availablePickupTimes = ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM"],
  availableDropOffTimes = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
}: UserTripsCardProps) {
  const [tripType, setTripType] = useState<"pickup" | "dropoff" | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const isLowRemaining = remainingTrips <= 2;
  const hasNoTrips = remainingTrips === 0;

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const resetSelection = () => {
    setTripType(null);
    setSelectedTime("");
  };

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
        {purchaseDate && (
          <p className="text-xs text-muted-foreground font-sans">
            Purchased: {purchaseDate}
          </p>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {!tripType ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-card-foreground">
                Select Trip Type
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-12 flex flex-col items-center justify-center gap-1 bg-transparent"
                disabled={hasNoTrips}
                onClick={() => setTripType("pickup")}
              >
                <span className="font-medium">Pickup</span>
                <span className="text-xs font-light">Going to campus</span>
              </Button>
              <Button
                variant="outline"
                className="h-12 flex flex-col items-center justify-center gap-1 bg-transparent"
                disabled={hasNoTrips}
                onClick={() => setTripType("dropoff")}
              >
                <span className="font-medium">Drop-off</span>
                <span className="text-xs font-light">Leaving campus</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-card-foreground">
                  Select {tripType === "pickup" ? "Pickup" : "Drop-off"} Time
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs"
                onClick={resetSelection}
              >
                Change
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between text-sm h-10 bg-transparent"
                  disabled={hasNoTrips}
                >
                  {selectedTime ||
                    `Choose ${
                      tripType === "pickup" ? "pickup" : "drop-off"
                    } time`}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {(tripType === "pickup"
                  ? availablePickupTimes
                  : availableDropOffTimes
                ).map((time) => (
                  <DropdownMenuItem
                    key={time}
                    className="cursor-pointer"
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

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
        <Button
          className="flex-1 font-medium"
          disabled={hasNoTrips || !selectedTime}
          variant={hasNoTrips || !selectedTime ? "secondary" : "default"}
        >
          {hasNoTrips
            ? "No Trips Left"
            : selectedTime
            ? "Confirm Trip"
            : "Use Trip"}
        </Button>
        {!hasNoTrips && (
          <Button variant="outline" size="sm" className="px-3 bg-transparent">
            Details
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
