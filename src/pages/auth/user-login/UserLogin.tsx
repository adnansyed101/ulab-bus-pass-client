import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import AuthCard from "../components/AuthCard";

const UserLogin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/user/home");
  };

  return (
    <AuthCard
      title="Shuttle Service"
      subtitle="Need a trip. Login to your account."
    >
      <Button variant="outline" className="w-full" onClick={handleClick}>
        Login with Google
      </Button>
    </AuthCard>
  );
};

export default UserLogin;
