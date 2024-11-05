import React, { useEffect, useState } from "react";
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
  top: 45px;
  width: 23px;
  height: 20px;
`;

const LocationText = styled.span`
  position: absolute;
  top: 55px;
  left: 30px;
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 0px;
`;

const TemperatureText = styled.h3`
  position: absolute;
  top: 97px;
  left: 0;
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
`;

const TemperatureValue = styled.p`
  position: absolute;
  top: 154px;
  left: 202px;
  color: var(--WF-Base-800, #2d3648);
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: 0.4px;
`;

const TemperatureRange = styled.div`
  position: absolute;
  top: 173px;
  left: 0;
  font-style: normal;

  span {
    margin-right: 5px;
    color: #979797;
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
  const [data, setData] = useState();

  // Mocked response
  const response = {
    status: 200,
    message: "날씨 조회 성공입니다.",
    data: {
      status: "hot",
      isUmbrella: true,
      hightemp: 25,
      lowtemp: 13,
      difftemp: 2,
      currenttemp: 22,
      rainper: 70,
      location: "서울시 노원구",
    },
  };

  useEffect(() => {
    setData(response.data);
  }, []);

  // 화살표 방향 결정
  const arrowDirection = data?.status === "hot" ? "↑" : "↓";

  return (
    <TemperatureContainer>
      <StyledLocationButton />
      <LocationText>{data?.location}</LocationText>
      <TemperatureText>오늘의 기온은 어제와 비슷해요</TemperatureText>
      <TemperatureValue>{data?.currenttemp}°C</TemperatureValue>
      <TemperatureRange>
        <span className="low">{data?.lowtemp}°C</span>
        <span>–</span>
        <span className="high">{data?.hightemp}°C</span>
        <span className="arrow">{arrowDirection}</span>
        <span className="change">{data?.difftemp}°C</span>
      </TemperatureRange>
    </TemperatureContainer>
  );
};

export default Temperature;
