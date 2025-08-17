import ModeToggle from "./mode-toggle";
import { EllipsisVertical } from "lucide-react";
import UserButton from "./user-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex items-center w-full max-w-xs gap-4">
        {/* Theme Toggle */}
        <a href="https://ulab.edu.bd/" target="_blank" className="hover-css">
          Home
        </a>
        <a
          href="https://urms-online.ulab.edu.bd/"
          target="_blank"
          className="hover-css"
        >
          URMS
        </a>
        <ModeToggle />
        <UserButton />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start p-4">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <UserButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
