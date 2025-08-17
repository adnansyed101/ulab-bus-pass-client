import { Link } from "react-router";
import ULABLogo from "@/assets/ulab-logo.png";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link to="/" className="flex-start">
            <img
              src={ULABLogo}
              alt={import.meta.env.VITE_APP_NAME}
              className="w-30"
            />
            <span className="hidden lg:block font-bold text-2xl ml-3 text-blue-700">
              {import.meta.env.VITE_APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
