"use client";

import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const LocationCard = () => {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number,
    longitude: number
  } | null>(null);
  const [destination, setDestination] = useState<any>(null);

  const [locationError, setLocationError] = useState<string | null>(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log(currentLocation);
        },
        (error) => {
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError("Update Your Browser to Continue Using this app.");
    }
  };

  // for now
  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div>
      {/* <h3>{currentLocation && currentLocation}</h3> */}
      <GooglePlacesAutocomplete
        selectProps={{
          value: destination,
          onChange: setDestination,
        }}
        apiKey="AIzaSyClunNzjwiA8DLmqZHOAhKDqyQqB5RFmYw"
        apiOptions={{
          language: "en",
          region: "",
        }}
      />
    </div>
  );
};

export default LocationCard;
