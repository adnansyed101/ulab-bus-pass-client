import { Link } from "react-router";
import ULABLogo from "@/assets/ulab-logo.png";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between">
        <div className="flex-start">
          <Link to="/" className="flex-start">
            <img src={ULABLogo} />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {import.meta.env.VITE_APP_NAME}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
