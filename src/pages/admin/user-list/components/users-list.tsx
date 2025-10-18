import { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  studentId: string;
  role: "admin" | "conductor" | "user";
}

interface UsersListProps {
  users?: User[];
}

export default function UsersList({ users = [] }: UsersListProps) {
  const [userList, setUserList] = useState<User[]>(
    users.length > 0
      ? users
      : [
          {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            studentId: "232011006",
            role: "admin",
          },
          {
            id: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            studentId: "232011006",
            role: "conductor",
          },
          {
            id: "3",
            name: "Mike Johnson",
            email: "mike@example.com",
            studentId: "232011006",
            role: "user",
          },
          {
            id: "4",
            name: "Sarah Williams",
            email: "sarah@example.com",
            studentId: "232011006",
            role: "user",
          },
          {
            id: "5",
            name: "Tom Brown",
            email: "tom@example.com",
            studentId: "232011006",
            role: "conductor",
          },
        ]
  );
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);

  const handleRoleUpdate = (
    userId: string,
    newRole: "admin" | "conductor" | "user"
  ) => {
    setUserList(
      userList.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const handleDeleteUser = (userId: string) => {
    setUserList(userList.filter((user) => user.id !== userId));
    setDeleteUserId(null);
  };

  return (
    <div>
      <Table className="table-auto w-full">
        <TableHeader>
          <TableRow>
            <TableHead>S.No</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>User Email</TableHead>
            <TableHead>Student Id</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userList.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.studentId}</TableCell>
              <TableCell className="text-center flex gap-2">
                <Select
                  value={user.role}
                  onValueChange={(value) =>
                    handleRoleUpdate(
                      user.id,
                      value as "admin" | "conductor" | "user"
                    )
                  }
                >
                  <SelectTrigger className="w-40 h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="conductor">Conductor</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
                <AlertDialog
                  open={deleteUserId === user.id}
                  onOpenChange={(open) => !open && setDeleteUserId(null)}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => setDeleteUserId(user.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete User</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete {user.name}? This action
                        cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex gap-3 justify-end">
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-destructive text-white hover:bg-destructive/90"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {userList.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No users found</p>
        </div>
      )}
    </div>
  );
}
