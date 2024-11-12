import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MaskContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 49px;
  width: 100%;
`;

const MaskText = styled.h3`
  position: absolute;
  top: 256px;
  left: 0;
  color: ${(props) => (props.isMask ? "#f40" : "#007AFF")};
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

const MaskAlarm = styled.h3`
  position: absolute;
  top: 316px;
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
  line-height: 1.2;
  letter-spacing: 0.13px;
  cursor: pointer;

  /* 중앙에 텍스트 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MaskIcon = styled.img`
  position: absolute;
  top: 331px;
  left: 193px;
  width: 114px;
  height: 114px;
  flex-shrink: 0;
`;

const IsMaskIcon = styled.img`
  position: absolute;
  top: 343px;
  left: 185px;
  width: 59px;
  height: 50px;
  flex-shrink: 0;
`;

const NoMaskIcon = styled.img`
  position: absolute;
  top: 331px;
  left: 193px;
  width: 114px;
  height: 114px;
  flex-shrink: 0;
`;

const Mask = ({ alert, isMask }) => {
  return (
    <MaskContainer>
      <MaskText isMask={isMask}>
        {isMask ? "마스크를 꼭 착용하세요" : "마스크는 필요없어요"}
      </MaskText>
      {alert && <MaskAlarm>미세먼지 경보</MaskAlarm>}
      {isMask ? (
        <>
          <MaskIcon
            src={require("../assets/images/mask.png")}
            alt="Mask icon"
          />
          <IsMaskIcon
            src={require("../assets/images/ismask.png")}
            alt="Is Mask icon"
          />
        </>
      ) : (
        <NoMaskIcon
          src={require("../assets/images/nomask.png")}
          alt="No Mask icon"
        />
      )}
    </MaskContainer>
  );
};

export default Mask;
