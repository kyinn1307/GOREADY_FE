import React from "react";
import styled from "styled-components";

const RainContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 49px;
  width: 100%;
`;

const RainText = styled.h3`
  position: absolute;
  top: 550px;
  left: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 0px;
`;

const RainValue = styled.p`
  position: absolute;
  top: 561px;
  left: 210px;
  color: var(--WF-Base-800, #2d3648);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%; /* 48px */
  letter-spacing: 0.4px;
`;

const RainMessage = styled.small`
  position: absolute;
  top: 615px;
  left: 0;
  color: #f40;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 0px;
`;

const RainIcon = styled.img`
  position: absolute;
  top: 657px;
  left: 193px;
  width: 100px;
  height: 98px;
  flex-shrink: 0;
`;

const RainProbability = () => {
  return (
    <RainContainer>
      <RainText>강수확률</RainText>
      <RainValue>80%</RainValue>
      <RainMessage>우산을 챙기세요</RainMessage>
      <RainIcon
        src={require("../assets/images/umbrella.png")}
        alt="Umbrella icon"
      />
    </RainContainer>
  );
};

export default RainProbability;
