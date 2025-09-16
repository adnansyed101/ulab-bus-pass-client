import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoveRight } from "lucide-react";

const TransactionHisotryPage = () => {
  return (
    <>
      <h3 className="text-xl font-semibold">History</h3>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>No. of Trips Purchased</TableHead>
              <TableHead>Per Trip Price</TableHead>
              <TableHead>Total Amount Paid</TableHead>
              <TableHead>Purchase Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell className="flex gap-2 items-center">ULAB <MoveRight /> Uttara</TableCell>
              <TableCell>10 trips</TableCell>
              <TableCell>Tk 100</TableCell>
              <TableCell>TK 1000</TableCell>
              <TableCell>2023-10-01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default TransactionHisotryPage;
