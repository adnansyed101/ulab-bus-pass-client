import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoveRight } from "lucide-react";

const AllTransactionHisotryPage = () => {
  return (
    <>
      <h3 className="text-xl font-semibold">History</h3>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sl No</TableHead>
              <TableHead>User Name</TableHead>
              <TableHead>User Email</TableHead>
              <TableHead>Locations</TableHead>
              <TableHead>Amount of Trips Bought</TableHead>
              <TableHead>Payment Method</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Md Adnan</TableCell>
              <TableCell>adnan.adnan.bba@ulab.edu.bd</TableCell>
              <TableCell className="flex gap-2 items-center">
                ULAB <MoveRight /> Uttara
              </TableCell>
              <TableCell>40</TableCell>
              <TableCell>SSLCommerz</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default AllTransactionHisotryPage;
