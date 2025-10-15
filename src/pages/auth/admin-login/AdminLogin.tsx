import Bus from "@/assets/bus.png";
import Logo from "@/assets/bus-logo.png";
import ModeToggle from "@/components/shared/header/mode-toggle";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, Mail, AlertCircle } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate login validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    return navigate("/admin/home");
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="place-self-center">
        <Card className="w-96 bg-white/30">
          <CardHeader className="flex flex-col items-center gap-2 text-center">
            <div className="mb-4">
              <img
                src={Logo}
                alt="Shuttle Service Logo"
                className="w-72 md:w-96"
              />
              <h1 className="text-3xl font-bold">Shuttle Service</h1>
            </div>
            <h1 className="text-xl font-semibold">Admin Login Panel</h1>
          </CardHeader>
          <CardContent>
            {/* Login Panel */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 border-primary"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 border-primary"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
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
          </CardContent>
        </Card>
      </div>
      {/* Right Side Image */}
      <div className="justify-self-end">
        <img src={Bus} alt="Bus Image" className="h-full" />
      </div>
    </section>
  );
};

export default AdminLogin;
