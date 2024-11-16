import React, { createContext, useState, useContext, useEffect } from "react";

const GeoInfoContext = createContext();

export const useLocationInfo = () => {
  return useContext(GeoInfoContext);
};

export const GeoInfoProvider = ({ children }) => {
  const [geoLocation, setGeoLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const updateLocation = (latitude, longitude) => {
    setGeoLocation({ latitude, longitude });
    console.log("Location updated:", { latitude, longitude });
  };

  return (
    <GeoInfoContext.Provider value={{ updateLocation, geoLocation }}>
      {children}
    </GeoInfoContext.Provider>
  );
};
