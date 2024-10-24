import React from "react";
import styled from "styled-components";

const MaskContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 49px;
  width: 100%;
`;

const MaskText = styled.h3`
  position: absolute;
  top: 330px;
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
  top: 382px;
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

  /* 중앙에 텍스트 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MaskIcon = styled.img`
  position: absolute;
  top: 383px; /* 위치값 수정.. 해야함 */
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
