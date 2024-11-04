import React from "react";
import styled from "styled-components";

const MaskContainer = styled.div`
  position: absolute;
  top: -35px;
  left: 59px;
  width: 100%;
`;

const MaskText = styled.h3`
  position: absolute;
  top: 310px;
  left: 0;
  color: #f40;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

const MaskAlarm = styled.h3`
  position: absolute;
  top: 370px;
  left: 0;
  border-radius: 18px;
  border: 1px solid #f40;
  background: #f40;
  width: 132px;
  height: 29px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2; /* 15.6px */
  letter-spacing: 0.13px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MaskIcon = styled.img`
  position: absolute;
  top: 385px; 
  left: 193px;
  width: 114px;
  height: 114px;
  flex-shrink: 0;
`;

const Mask = () => {
  return (
    <MaskContainer>
      <MaskText>마스크를 꼭 착용하세요</MaskText>
      <MaskAlarm>미세먼지 경보</MaskAlarm>
      <MaskIcon src={require("../assets/images/mask.png")} alt="Mask icon" />
    </MaskContainer>
  );
};

export default Mask;
