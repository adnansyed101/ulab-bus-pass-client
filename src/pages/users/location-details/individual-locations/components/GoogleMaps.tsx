import { Map } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const GoogleMaps = () => {
  const [latLan, setLatLan] = useState({ latitude: 0, longitude: 0 });
  const [err, setErr] = useState<GeolocationPositionError | undefined>(
    undefined
  );
  const position = { lat: latLan.latitude, lng: latLan.longitude };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatLan({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log(position.coords.latitude, " ", position.coords.longitude);
        },
        (err) => {
          setErr(err);
        },
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
      );
    }
  }, []);

  return (
    <div className="h-auto">
      <p>{JSON.stringify(latLan)}</p>
      <Map center={position} />
    </div>
  );
};

export default GoogleMaps;
