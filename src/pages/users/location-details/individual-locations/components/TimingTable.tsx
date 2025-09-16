import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoveRight } from "lucide-react";

const TimingTable = () => {
  const details = {
    stoppages: [
      "Research Building",
      "Dhanmondi 15",
      "Shankar",
      "Mohammadpur Bus Stand",
      "ULAB",
    ],
    timing: [
      {
        day: "Sunday to Thursday",
        pickupTime: [
          "7:20 AM",
          "8:30 AM",
          "10:10 AM",
          "11:40 AM",
          "2:30 AM",
          "3:50 PM",
        ],
        dropOffTime: [
          "9:35 AM",
          "11:00 AM",
          "1:40 AM",
          "3:15 PM",
          "4:40 PM",
          "6:05 PM",
        ],
      },
      {
        day: "Saturday",
        pickupTime: [
          "7:20 AM",
          "8:30 AM",
          "10:10 AM",
          "11:40 AM",
          "2:30 AM",
          "3:50 PM",
        ],
        dropOffTime: [
          "9:35 AM",
          "11:00 AM",
          "1:40 AM",
          "3:15 PM",
          "4:40 PM",
          "6:05 PM",
        ],
      },
      {
        day: "Friday (Graduate Class)",
        pickupTime: [
          "7:20 AM",
          "8:30 AM",
          "10:10 AM",
          "11:40 AM",
          "2:30AM",
          "3:50 PM",
        ],
        dropOffTime: [
          "9:35 AM",
          "11:00 AM",
          "1:40 AM",
          "3:15 PM",
          "4:40 PM",
          "6:05 PM",
        ],
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold flex gap-2 items-center">
        ULAB <MoveRight /> Dhanmondi 4/A
      </h3>
      <p>Route from ULAB to Dhanmondi 4/A</p>
      <Card className="p-6">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {["Day", "Pick Up Time", "Drop off Time"].map((head) => (
                  <TableHead key={head}>{head}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {details.timing.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {entry.day}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <ul className="list-disc">
                      {entry.pickupTime.map((time, timeIndex) => (
                        <li key={timeIndex}>{time}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <ul className="list-disc">
                      {entry.dropOffTime.map((time, timeIndex) => (
                        <li key={timeIndex}>{time}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Separator className="my-4" />
          <h4>Stoppages</h4>
          <ul className="list-decimal">
            {details.stoppages.map((stops) => (
              <li key={stops}>{stops}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimingTable;
