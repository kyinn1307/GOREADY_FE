import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Temperature from "../components/Temperature";
import Mask from "../components/Mask";
import RainProbability from "../components/RainProbability";
import { useLocationInfo } from "../context/GeoInfoContext";
import { axiosInstance } from "../apis/axiosInstance";
import { SyncLoader } from "react-spinners";
import { useGeoLocation } from "../hooks/useGeoLocation";

const MainPageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 393px;
`;

const Divider = styled.div`
  position: relative;
  margin-top: ${(props) => props.marginTop}px;
  width: 100%;
  height: 1px;
  background-color: #ebedf0;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute; /* 부모 컨테이너의 위치 기준 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 완전 중앙으로 이동 */
  font-family: "Pretendard";
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
      <Temperature weatherInfo={weatherInfo} currLocation={maskInfo.address} />
      <Divider marginTop={49} />
      <Mask alert={maskInfo.alert} mask={maskInfo.mask} />
      <Divider marginTop={27} />
      <RainProbability
        rainPer={weatherInfo.rainPer}
        umbrella={weatherInfo.umbrella}
      />
    </MainPageContainer>
  );
};

export default GoreadyInfoPage;
