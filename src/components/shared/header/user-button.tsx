import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

const UserButton = () => {
  const firstInitial = "U";

  return (
    <div className="flex gap-2 items-center ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant={"ghost"}
              className="relative w-8 h-8 rounded-full ml-2 flex items justify-center bg-gray-200"
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">Adnan</div>
              <div className="text-sm text-muted-foreground font-medium leading-none">
                adnan.adnan.bba@uab.edu.bd
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <Link to="/user/orders" className="w-full">
              Order History
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link to="/user/profile" className="w-full">
              User Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0 mb-1">
            <form className="w-full">
              <Button
                className="w-full py-4 px-2 h-4 justify-start"
                variant={"ghost"}
              >
                Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
