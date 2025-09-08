import { ShoppingBag } from "lucide-react";

const TripCart = () => {
  return (
    <>
      <h4 className="flex gap-2 items-center">
        <ShoppingBag size={20} />{" "}
        <span className="text-xl font-medium tracking-wider">Cart</span>
      </h4>
    </>
  );
};

export default TripCart;
