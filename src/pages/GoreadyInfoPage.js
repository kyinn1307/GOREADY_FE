import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as GoReadyLogo } from "../assets/images/goReadyLogo.svg";
import Temperature from "../components/Temperature";
import Mask from "../components/Mask";
import RainProbability from "../components/RainProbability";
import { useLocationInfo } from "../context/GeoInfoContext";
import { axiosInstance } from "../apis/axiosInstance";
import { SyncLoader } from "react-spinners";
import { useGeoLocation } from "../hooks/useGeoLocation";

const MainPageContainer = styled.div`
  position: relative;
  justify-content: center;
  width: 393px;
  height: 852px;
  background-color: #fafafa;
`;

const Divider = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: 11px;
  width: 100%;
  height: 1px;
  background-color: #ebedf0;
`;

const StyledLogo = styled(GoReadyLogo)`
  position: absolute;
  top: 33px;
  left: 264px;
  width: 70.2px;
  height: 30px;
`;

const Loading = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
`;

const GoreadyInfoPage = () => {
  const { geoLocation, updateLocation } = useLocationInfo();
  const [weatherInfo, setWeatherInfo] = useState("");
  const [maskInfo, setMaskInfo] = useState("");
  const [isLocationLoaded, setIsLocationLoaded] = useState(false);
  const { location, getLocation } = useGeoLocation();

  useEffect(() => {
    if (location && location.latitude && location.longitude) {
      updateLocation(location.latitude, location.longitude);
      setIsLocationLoaded(true);
    }
  }, [location]);

  useEffect(() => {
    const storedLatitude = localStorage.getItem("latitude");
    const storedLongitude = localStorage.getItem("longitude");

    if (storedLatitude && storedLongitude) {
      updateLocation(parseFloat(storedLatitude), parseFloat(storedLongitude));
    }

    getLocation();
  }, []);

  const fetchWeatherData = async () => {
    if (geoLocation.latitude != null && geoLocation.longitude != null) {
      try {
        const response = await axiosInstance.get(
          `/api/weather?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}`
        );
        setWeatherInfo(response.data.data);
        console.log("날씨 정보", weatherInfo);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    }
  };

  const fetchMaskData = async () => {
    if (geoLocation.latitude != null && geoLocation.longitude != null) {
      try {
        const response = await axiosInstance.get(
          `/api/mask?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}`
        );
        setMaskInfo(response.data.data);
        console.log("마스크 정보", maskInfo);
      } catch (error) {
        console.error("Failed to fetch mask data:", error);
      }
    }
  };

  useEffect(() => {
    if (isLocationLoaded) {
      fetchWeatherData();
      fetchMaskData();
    }
  }, [geoLocation]);

  if (!isLocationLoaded || !weatherInfo || !maskInfo)
    return (
      <Loading>
        Loading...
        <SyncLoader />
      </Loading>
    );

  return (
    <MainPageContainer>
      <StyledLogo />
      <Temperature weatherInfo={weatherInfo} currLocation={maskInfo.address} />
      <Mask alert={maskInfo.alert} mask={maskInfo.mask} />
      <RainProbability
        rainPer={weatherInfo.rainPer}
        umbrella={weatherInfo.umbrella}
      />
      <Divider top={251} />
      <Divider top={470} />
    </MainPageContainer>
  );
};

export default GoreadyInfoPage;
