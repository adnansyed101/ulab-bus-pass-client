import type React from "react";
import Logo from "@/assets/bus-logo.png";
import ModeToggle from "@/components/shared/header/mode-toggle";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const AuthCard = ({ title, subtitle, children }: AuthCardProps) => {
  return (
    <Card className="w-96 bg-white/30">
      <CardHeader className="flex flex-col items-center gap-2 text-center">
        <div className="mb-4">
          <img src={Logo} alt="Shuttle Service Logo" className="w-72 md:w-96" />
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <h1 className="text-xl font-semibold">{subtitle}</h1>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="items-center justify-center gap-4">
        <ModeToggle />
        <a href="https://ulab.edu.bd/" target="_blank" className="hover-link">
          HOME
        </a>
        <a
          href="https://urms-online.ulab.edu.bd/"
          target="_blank"
          className="hover-link"
        >
          URMS
        </a>
      </CardFooter>
    </Card>
  );
};

export default AuthCard;
