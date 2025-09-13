import { NumberInput } from "@/components/number-input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoveRight, ShoppingBag, } from "lucide-react";

const TripCart = () => {
  return (
    <>
      <h4 className="flex gap-2 items-center">
        <ShoppingBag size={20} />{" "}
        <span className="text-xl font-medium tracking-wider">Cart</span>
      </h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Destination</TableHead>
            <TableHead>Trip Amount</TableHead>
            <TableHead>Total Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <span className="flex gap-2 items-center">
                ULAB <MoveRight /> Dhanmondi 4/A
              </span>
            </TableCell>
            <TableCell>
              <NumberInput />
            </TableCell>
            <TableCell>TK 500</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell>TK 500</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-end mt-4">
        <Button>Purchase</Button>
      </div>
    </>
  );
};

export default TripCart;
