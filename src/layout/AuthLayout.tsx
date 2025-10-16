import Bus from "@/assets/bus.png";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="place-self-center">
        <Outlet />
      </div>
      {/* Right Side Image */}
      <div className="justify-self-end">
        <img src={Bus} alt="Bus Image" className="h-full" />
      </div>
    </section>
  );
};

export default AuthLayout;
