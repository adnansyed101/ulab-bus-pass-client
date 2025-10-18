import { Users } from "lucide-react";
import UsersList from "./components/users-list";

const UserListPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="flex gap-2 items-center text-xl font-bold text-foreground mb-2">
          <Users className="h-5 w-5 text-primary" />
          Users Management
        </h1>
        <p className="text-muted-foreground">
          Manage system users, roles, and permissions
        </p>
      </div>
      <UsersList />
    </div>
  );
};

export default UserListPage;
