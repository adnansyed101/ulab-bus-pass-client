import Bus from "@/assets/bus.png";
import Logo from "@/assets/bus-logo.png";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/header/mode-toggle";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/home");
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="place-self-center">
        <div className="space-y-6 border p-6 rounded-md">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="mb-4">
              <img
                src={Logo}
                alt="Shuttle Service Logo"
                className="w-72 md:w-96"
              />
              <h1 className="text-3xl font-bold">Shuttle Service</h1>
            </div>
            <h1 className="text-xl font-semibold">Login to your account</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Need a trip. Login with your gmail account.
            </p>
          </div>
          <div className="grid gap-6">
            <Button variant="outline" className="w-full" onClick={handleClick}>
              Login with Google
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4">
            <ModeToggle />
            <a
              href="https://ulab.edu.bd/"
              target="_blank"
              className="hover-link"
            >
              HOME
            </a>
            <a
              href="https://urms-online.ulab.edu.bd/"
              target="_blank"
              className="hover-link"
            >
              URMS
            </a>
          </div>
        </div>
      </div>
      <div className="justify-self-end">
        <img src={Bus} alt="Bus Image" className="h-full" />
      </div>
    </section>
  );
};

export default Login;
