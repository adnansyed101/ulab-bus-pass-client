import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoveRight, TicketPlus } from "lucide-react";

const TripsList = () => {
  return (
    <Table>
      <TableCaption>List of destinations</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Destination</TableHead>
          <TableHead>Price / Trip</TableHead>
          <TableHead>Single/Package</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>
            <span className="flex gap-2 items-center">
              ULAB <MoveRight /> Dhanmondi 4/A
            </span>
          </TableCell>
          <TableCell>BDT 30</TableCell>
          <TableCell>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="1"
                  id="single"
                  className="border-gray-400"
                />
                <Label htmlFor="single">Single Trip</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="30"
                  id="30"
                  className="border-gray-400"
                />
                <Label htmlFor="30">30 Trips</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="40"
                  id="40"
                  className="border-gray-400"
                />
                <Label htmlFor="40">40 Trips</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="50"
                  id="50"
                  className="border-gray-400"
                />
                <Label htmlFor="50">50 Trips</Label>
              </div>
            </RadioGroup>
          </TableCell>
          <TableCell>
            <Button size="icon" className="size-8">
              <TicketPlus />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Destination</TableCell>
          <TableCell>BDT 30</TableCell>
          <TableCell>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="1"
                  id="single"
                  className="border-gray-400"
                />
                <Label htmlFor="single">Single Trip</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="30"
                  id="30"
                  className="border-gray-400"
                />
                <Label htmlFor="30">30 Trips</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="40"
                  id="40"
                  className="border-gray-400"
                />
                <Label htmlFor="40">40 Trips</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="50"
                  id="50"
                  className="border-gray-400"
                />
                <Label htmlFor="50">50 Trips</Label>
              </div>
            </RadioGroup>
          </TableCell>
          <TableCell>
            <Button size="icon" className="size-8">
              <TicketPlus />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Destination</TableCell>
          <TableCell>BDT 30</TableCell>
          <TableCell>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="1"
                  id="single"
                  className="border-gray-400"
                />
                <Label htmlFor="single">Single Trip</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="30"
                  id="30"
                  className="border-gray-400"
                />
                <Label htmlFor="30">30 Trips</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="40"
                  id="40"
                  className="border-gray-400"
                />
                <Label htmlFor="40">40 Trips</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="50"
                  id="50"
                  className="border-gray-400"
                />
                <Label htmlFor="50">50 Trips</Label>
              </div>
            </RadioGroup>
          </TableCell>
          <TableCell>
            <Button size="icon" className="size-8">
              <TicketPlus />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TripsList;
