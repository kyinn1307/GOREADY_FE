import React, { createContext, useState, useContext } from "react";

// Create a context for location
const GeoInfoContext = createContext();

// Custom hook for accessing location context
export const useLocationInfo = () => {
  return useContext(GeoInfoContext);
};

// Provider component
export const GeoInfoProvider = ({ children }) => {
  const [geoLocation, setGeoLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const updateLocation = (latitude, longitude) => {
    setGeoLocation({ latitude, longitude });
    console.log("geolocation값", geoLocation);
    if ((geoLocation.latitude != null) & geoLocation.longitude) {
      localStorage.setItem("latitude", geoLocation.latitude);
      localStorage.setItem("longitude", geoLocation.longitude);
    }
  };

  return (
    <GeoInfoContext.Provider value={{ geoLocation, updateLocation }}>
      {children}
    </GeoInfoContext.Provider>
  );
};
