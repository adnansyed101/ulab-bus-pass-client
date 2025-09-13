import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoveRight, TicketPlus } from "lucide-react";

const TripsList = () => {
  return (
    <>
      <h4 className="text-xl font-medium tracking-wider">Buy Trips</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Price/Trip</TableHead>
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
            <TableCell className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" className="size-8">
                    <TicketPlus />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to Cart</p>
                </TooltipContent>
              </Tooltip>
              <Button variant="outline">Details</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default TripsList;
