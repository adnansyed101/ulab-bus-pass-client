import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";

const AllLocationsPage = () => {
  const locations = [
    {
      id: 1,
      name: "Dhanmondi 4/A",
      description: "Route from ULAB to Dhanmondi 4/A",
      href: "/users/location-details/1",
    },
    {
      id: 2,
      name: "Uttara",
      description: "Route from ULAB to Uttara",
      href: "/users/location-details/2",
    },
    {
      id: 3,
      name: "Mirpur",
      description: "Route from ULAB to Mirpur",
      href: "/users/location-details/3",
    },
  ];

  return (
    <>
      <h4 className="text-xl font-semibold">Available Locations</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {locations.map((location) => (
          <Card key={location.id} className="p-4">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              ULAB <MoveRight />
              {location.name}
            </CardTitle>
            <CardDescription>
              <p className="text-sm text-muted-foreground">
                {location.description}
              </p>
            </CardDescription>
            <CardAction>
              <Button variant="link" asChild>
                <Link to={location.href}>View Details</Link>
              </Button>
            </CardAction>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AllLocationsPage;
