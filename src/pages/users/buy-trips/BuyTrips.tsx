import TripsList from "./copmponents/trips-list";
import TripCart from "./copmponents/trips-cart";

const BuyTrips = () => {
  return (
    <div className="min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-2 flex-1 rounded-xl md:min-h-min ">
      <div className="rounded-md p-4">
        <TripsList />
      </div>
      <div className="rounded-md p-4">
        <TripCart />
      </div>
    </div>
  );
};

export default BuyTrips;
