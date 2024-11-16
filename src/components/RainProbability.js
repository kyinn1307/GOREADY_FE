import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Umbrella } from "../assets/images/umbrella.svg";
import { ReactComponent as NoUmbrella } from "../assets/images/noumbrella.svg";

const RainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RainText = styled.div`
  position: relative;
  margin-top: 37px;
  color: #000;
  width: 100px;
  height: 25px;
  font-size: 25px;
  font-family: "Pretendard";
  font-weight: 600;
`;

const RainValue = styled.div`
  position: relative;
  margin-top: 30px;
  margin-left: 52px;
  color: var(--WF-Base-800, #2d3648);
  font-size: 40px;
  font-family: "Inter";
  font-weight: 300;
  line-height: 120%; /* 48px */
  letter-spacing: 0.4px;
`;

const RainMessage = styled.div`
  position: relative;
  margin-top: 16px;
  color: ${(props) => (props.umbrella ? "#f40" : "#007AFF")};
  font-size: 25px;
  font-family: "Pretendard";
  font-weight: 400;
`;

const StyledUmbrella = styled(Umbrella)`
  position: relative;
  width: 100px;
  height: 98px;
  margin-top: 42.5px;
  margin-left: 242px;
`;
const StyledNoUmbrella = styled(NoUmbrella)`
  position: relative;
  width: 100px;
  height: 98px;
  margin-top: 42.5px;
  margin-left: 242px;
`;
const TopContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
const TextContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: 49px;
  flex-direction: column;
`;

const RainProbability = ({ rainPer, umbrella }) => {
  return (
    <RainContainer>
      <TopContentWrapper>
        <TextContainer>
          <RainText>강수확률</RainText>
          <RainMessage umbrella={umbrella}>
            {umbrella ? "우산을 챙기세요" : "우산은 괜찮아요"}
          </RainMessage>
        </TextContainer>
        <RainValue>{rainPer}%</RainValue>
      </TopContentWrapper>
      {umbrella ? <StyledUmbrella /> : <StyledNoUmbrella />}
    </RainContainer>
  );
};

export default RainProbability;
