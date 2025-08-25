import { UserTripsCard } from "@/components/user-trips-card";
import type { UserTripsCardProps } from "@/lib/types";

const ShowCards = ({ cardData }: { cardData: UserTripsCardProps[] }) => {
  return (
    <>
      {cardData.length > 0 ? (
        cardData.map((trips) => <UserTripsCard {...trips} />)
      ) : (
        <h2 className="pl-2">No Trips Purchased/Remaining</h2>
      )}
    </>
  );
};

export default ShowCards;
