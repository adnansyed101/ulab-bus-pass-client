"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SeatState {
  id: number;
  status: "empty" | "occupied" | "selected";
  seatNumber: number;
}

interface BusSeatLayoutProps {
  occupiedSeats?: number[];
  onSeatSelect?: (seatId: number) => void;
}

export function BusSeatLayout({
  occupiedSeats = [],
  onSeatSelect,
}: BusSeatLayoutProps) {
  // Initialize 40 seats (10 rows x 4 seats)
  const [seats, setSeats] = useState<SeatState[]>(() => {
    const initialSeats: SeatState[] = [];
    for (let i = 1; i <= 40; i++) {
      // const row = Math.ceil(i / 4);
      // const position = ((i - 1) % 4) + 1;
      // let seatNumber = i;

      // if (position <= 2) {
      //   seatNumber = `${row}${position === 1 ? "A" : "B"}`;
      // } else {
      //   seatNumber = `${row}${position === 3 ? "C" : "D"}`;
      // }

      initialSeats.push({
        id: i,
        status: occupiedSeats.includes(i) ? "occupied" : "empty",
        seatNumber: i,
      });
    }
    return initialSeats;
  });

  const handleSeatClick = (seatId: number) => {
    const seat = seats.find((s) => s.id === seatId);
    if (seat?.status === "occupied") return; // Can't select occupied seats

    const currentSelectedCount = seats.filter(
      (s) => s.status === "selected"
    ).length;

    // If trying to select a new seat and already at 5-seat limit, prevent selection
    if (seat?.status === "empty" && currentSelectedCount >= 5) {
      return;
    }

    setSeats((prev) =>
      prev.map((seat) => {
        if (seat.id === seatId) {
          const newStatus = seat.status === "selected" ? "empty" : "selected";
          return { ...seat, status: newStatus };
        }
        return seat;
      })
    );

    onSeatSelect?.(seatId);
  };

  const getSeatColor = (status: string) => {
    switch (status) {
      case "occupied":
        return "bg-blue-500 hover:bg-blue-600";
      case "selected":
        return "bg-green-500 hover:bg-green-600";
      default:
        return "bg-gray-300 hover:bg-gray-400";
    }
  };

  const getSeatTextColor = (status: string) => {
    return status === "empty" ? "text-gray-700" : "text-white";
  };

  // Group seats into rows of 4
  const seatRows = [];
  for (let i = 0; i < seats.length; i += 4) {
    seatRows.push(seats.slice(i, i + 4));
  }

  const selectedSeats = seats.filter((seat) => seat.status === "selected");

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="px-2 md:px-6">
        <CardTitle className="text-center">Select Your Seats</CardTitle>
        <div className="text-center text-sm text-gray-600 mb-2">
          Maximum 5 seats can be selected
        </div>
        <div className="flex justify-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Occupied</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Selected</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Driver section */}
        <div className="mb-4 p-2 bg-gray-100 rounded-t-lg">
          <div className="text-center text-sm font-medium text-gray-600">
            Driver
          </div>
        </div>

        {/* Seat layout */}
        <div className="space-y-2">
          {seatRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-2">
              {/* Left side seats */}
              <div className="flex gap-1">
                {row.slice(0, 2).map((seat) => (
                  <Button
                    key={seat.id}
                    variant="outline"
                    size="sm"
                    className={`w-12 h-12 p-0 text-xs font-medium border-2 ${getSeatColor(
                      seat.status
                    )} ${getSeatTextColor(seat.status)}`}
                    onClick={() => handleSeatClick(seat.id)}
                    disabled={seat.status === "occupied"}
                  >
                    {seat.seatNumber}
                  </Button>
                ))}
              </div>

              {/* Aisle */}
              <div className="w-6"></div>

              {/* Right side seats */}
              <div className="flex gap-1">
                {row.slice(2, 4).map((seat) => (
                  <Button
                    key={seat.id}
                    variant="outline"
                    size="sm"
                    className={`w-12 h-12 p-0 text-xs font-medium border-2 ${getSeatColor(
                      seat.status
                    )} ${getSeatTextColor(seat.status)}`}
                    onClick={() => handleSeatClick(seat.id)}
                    disabled={seat.status === "occupied"}
                  >
                    {seat.seatNumber}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected seats summary */}
        {selectedSeats.length > 0 && (
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <div className="text-sm font-medium text-green-800">
              Selected Seats:{" "}
              {selectedSeats.map((seat) => seat.seatNumber).join(", ")}
            </div>
            <div className="text-xs text-green-600 mt-1">
              {selectedSeats.length} of 5 seat
              {selectedSeats.length !== 1 ? "s" : ""} selected
              {selectedSeats.length === 5 && " (Maximum reached)"}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
