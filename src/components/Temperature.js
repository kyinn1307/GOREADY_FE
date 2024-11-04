import React from "react";
import styled from "styled-components";
import { ReactComponent as LocationButton } from "../assets/images/locationButton.svg";
import '../fonts/fonts.css';

const TemperatureContainer = styled.div`
  position: absolute;
  top: -35px;
  left: 59px;
  width: 100%;
`;

const StyledLocationButton = styled(LocationButton)`
  position: absolute;
  left: 0px;
  top: 95px;
  width: 23px;
  height: 20px;
`;

const LocationText = styled.span`
  position: absolute;
  top: 105px;
  left: 30px;
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 0px;
`;

const TemperatureText = styled.h3`
  position: absolute;
  top: 115px;
  left: 0;
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
`;

const TemperatureValue = styled.p`
  position: absolute;
  top: 170px;
  left: 202px;
  color: var(--WF-Base-800, #2d3648);
  font-size: 40px;
  font-family:'Inter';
  font-style: normal;
  font-weight: 300;
  line-height: 120%; /* 48px */
  letter-spacing: 0.4px;
`;

const TemperatureRange = styled.div`
  position: absolute;
  top: 217px;
  left: 0;
  font-style: normal;
  font-family:'Inter';

  span {
    margin-right: 5px;
    color: 979797;
  }

  .low {
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
    color: #ff4500;
    font-size: 13px;
  }

  
`;

const Temperature = () => {
  return (
    <TemperatureContainer>
      <StyledLocationButton />
      <LocationText>공릉동</LocationText>
      <TemperatureText>오늘의 기온은 어제와 비슷해요</TemperatureText>
      <TemperatureValue>13°C</TemperatureValue>
      <TemperatureRange>
        <span className="low">11°C</span>
        <span>–</span>
        <span className="high">19°C</span>
        <span className="arrow">↑</span>
        <span className="change">5°C</span>
      </TemperatureRange>
    </TemperatureContainer>
  );
};

export default Temperature;
