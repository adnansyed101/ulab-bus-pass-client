import GoogleMaps from "./components/GoogleMaps";
import TimingTable from "./components/TimingTable";
import { APIProvider } from "@vis.gl/react-google-maps";

const LocationDetailsPage = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TimingTable />
      <APIProvider apiKey={import.meta.env.VITE_GoogleApiKey}>
        <GoogleMaps />
      </APIProvider>
    </section>
  );
};

export default LocationDetailsPage;
