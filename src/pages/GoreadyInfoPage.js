import React from "react";
import styled from "styled-components";
import Temperature from "../components/Temperature";
import Mask from "../components/Mask";
import RainProbability from "../components/RainProbability";

const MainPageContainer = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
  background-color: #fafafa;
`;

const Divider = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: 11px;
  width: 369px;
  height: 1px;
  background-color: #ebedf0;
`;

const GoreadyInfoPage = () => {
  return (
    <MainPageContainer>
      <Temperature />
      <Mask />
      <RainProbability />
      <Divider top={305} />
      <Divider top={524} />
    </MainPageContainer>
  );
};

export default GoreadyInfoPage;
