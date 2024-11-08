import React from "react";
import styled from "styled-components";
import { ReactComponent as GoReadyLogo } from "../assets/images/goReadyLogo.svg";
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
  return (
    <MainPageContainer>
      <StyledLogo />
      <Temperature />
      <Mask />
      <RainProbability />
      <Divider top={251} />
      <Divider top={470} />
    </MainPageContainer>
  );
};

export default GoreadyInfoPage;
