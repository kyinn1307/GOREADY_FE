import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as LocationButton } from "../assets/images/locationButton.svg";
import { ReactComponent as GoReadyLogo } from "../assets/images/goReadyLogo.svg";
import { useLocationInfo } from "../context/GeoInfoContext";

const TemperatureContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 33px;
`;

const StyledLogo = styled(GoReadyLogo)`
  position: relative;
  width: 70.2px;
  height: 30px;
  margin-left: 140px;
`;

const StyledLocationButton = styled(LocationButton)`
  position: relative;
  margin-left: 49px;
  width: 23px;
  height: 20px;
  cursor: pointer;
`;

const LocationText = styled.div`
  position: relative;
  margin-left: 7px;
  color: #000;
  font-size: 15px;
  font-family: "Pretendard";
  font-weight: 400;
  line-height: 0px;
`;

const TemperatureText = styled.div`
  position: relative;
  margin-top: 22.5px;
  text-align: center;
  color: #000;
  font-size: 25px;
  font-family: "Pretendard";
  font-weight: 600;
  width: 100%;

  .colored {
    color: ${({ changeColor }) => changeColor || "#000"};
  }
`;

const TempInfoBox = styled.div`
  position: relative;
  display: flex;
  margin-top: 43.5px;
  align-items: center;
`;

const TemperatureValue = styled.div`
  position: relative;
  margin-left: 58px;
  color: var(--WF-Base-800, #2d3648);
  font-size: 40px;
  font-family: "Inter";
  font-weight: 300;
  line-height: 120%;
  letter-spacing: 0.4px;
`;

const TemperatureRange = styled.div`
  position: relative;
  font-family: "Inter";

  span {
    margin-right: 5px;
    color: #979797;
  }

  .low {
    margin-left: 50px;
    font-size: 16px;
    color: #007bff;
  }

  .high {
    font-size: 16px;
    color: #f40;
  }
  .arrow {
    margin-left: 15px;
    color: black;
    font-size: 16px;
  }
  .change {
    margin-left: 5px;
    color: ${({ changeColor }) => changeColor || "#000"};
    font-size: 13px;
  }
`;

const Temperature = ({ weatherInfo, currLocation }) => {
  const { geoLocation, updateLocation } = useLocationInfo();

  const arrowDirection =
    weatherInfo?.status === "hot"
      ? "↑"
      : weatherInfo?.status === "cold"
      ? "↓"
      : "";

  const tempDiffTxt =
    weatherInfo?.status === "hot" ? (
      <span>
        오늘의 기온은 어제보다 <span className="colored">높아요</span>
      </span>
    ) : weatherInfo?.status === "cold" ? (
      <span>
        오늘의 기온은 어제보다 <span className="colored">낮아요</span>
      </span>
    ) : (
      "오늘의 기온은 어제와 같아요"
    );

  const changeColor =
    weatherInfo?.status === "hot"
      ? "#ff4500"
      : weatherInfo?.status === "cold"
      ? "#007aff"
      : "#000";

  const weatherDiff =
    weatherInfo?.status === "same" ? "" : `${weatherInfo?.diffTemp}°C`;

  const handleLocationUpdate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          updateLocation(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <TemperatureContainer>
      <TopWrapper>
        <StyledLocationButton onClick={handleLocationUpdate} />
        <LocationText>{currLocation}</LocationText>
        <StyledLogo />
      </TopWrapper>
      <TemperatureText changeColor={changeColor}>{tempDiffTxt}</TemperatureText>
      <TempInfoBox>
        <TemperatureRange changeColor={changeColor}>
          <span className="low">{weatherInfo?.lowTemp}°C</span>
          <span>–</span>
          <span className="high">{weatherInfo?.highTemp}°C</span>
          <span className="arrow">{arrowDirection}</span>
          <span className="change">{weatherDiff}</span>
        </TemperatureRange>
        <TemperatureValue>{weatherInfo?.currentTemp}°C</TemperatureValue>
      </TempInfoBox>
    </TemperatureContainer>
  );
};

export default Temperature;
