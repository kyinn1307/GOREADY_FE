import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as GoReadyLogo } from "../assets/images/goReadyLogo.svg";
import Temperature from "../components/Temperature";
import Mask from "../components/Mask";
import RainProbability from "../components/RainProbability";
import { useLocationInfo } from "../context/GeoInfoContext";
import { axiosInstance } from "../apis/axiosInstance";

const MainPageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 393px;
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

const GoreadyInfoPage = () => {
  const { geoLocation, updateLocation } = useLocationInfo();
  const [weatherInfo, setWeatherInfo] = useState();
  const [currLocation, setCurrLocation] = useState("공릉동");

  const fetchData = async () => {
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

  useEffect(() => {
    const storedLatitude = localStorage.getItem("latitude");
    const storedLongitude = localStorage.getItem("longitude");
    if (storedLatitude && storedLongitude) {
      updateLocation(parseFloat(storedLatitude), parseFloat(storedLongitude));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [geoLocation]);

  if (!weatherInfo) return null;

  return (
    <MainPageContainer>
      <StyledLogo />
      <Temperature weatherInfo={weatherInfo} currLocation={currLocation} />
      <Mask />
      <RainProbability />
      <Divider top={305} />
      <Divider top={524} />
    </MainPageContainer>
  );
};

export default GoreadyInfoPage;
