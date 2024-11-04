import React from "react";
import styled from "styled-components";
import Temperature from "../components/Temperature";
import Mask from "../components/Mask";
import RainProbability from "../components/RainProbability";

const MainPageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content:center;
  width: 393px;
  background-color: #fafafa;
`;

const Divider = styled.div`
  position: absolute;
  justify-content:center;
  top: ${(props) => props.top}px;
  left: 11px;
  width: 100%;
  height: 1px;
  background-color: #ebedf0;
`;

const GoreadyInfoPage = () => {
  return (
    <MainPageContainer>
      <Temperature />
      <Mask />
      <RainProbability />
      <Divider top={270} />
      <Divider top={489} />
    </MainPageContainer>
  );
};

export default GoreadyInfoPage;
