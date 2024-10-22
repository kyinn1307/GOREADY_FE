import React from "react";
import styled from "styled-components";
import { ReactComponent as LocationButton } from "../assets/images/locationButton.svg";

const TemperatureContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 49px;
  width: 100%;
`;

const StyledLocationButton = styled(LocationButton)`
  position: absolute;
  left: 0px;
  top: 99px;
  width: 23px;
  height: 20px;
`;

const LocationText = styled.span`
  position: absolute;
  top: 109px;
  left: 30px;
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 0px;
`;

const TemperatureText = styled.h3`
  position: absolute;
  top: 152px;
  left: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
`;

const TemperatureValue = styled.p`
  position: absolute;
  top: 208px;
  left: 202px;
  color: var(--WF-Base-800, #2d3648);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%; /* 48px */
  letter-spacing: 0.4px;
`;

const TemperatureRange = styled.div`
  position: absolute;
  top: 227px;
  left: 0;
  font-family: Inter;
  font-style: normal;

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

  .change {
    color: #ff4500;
    font-size: 13px;
  }

  .arrow {
    color: black;
    font-size: 16px;
  }
`;

const Temperature = () => {
  return (
    <TemperatureContainer>
      <StyledLocationButton />
      <LocationText>노원구 공릉동</LocationText>
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
