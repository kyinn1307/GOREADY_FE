import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as MaskIcon } from "../assets/images/mask.svg";
import { ReactComponent as NoMaskIcon } from "../assets/images/nomask.svg";

const MaskContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MaskText = styled.div`
  position: relative;
  margin-top: 32.5px;
  margin-left: 49px;
  color: ${(props) => (props.mask ? "#f40" : "#007AFF")};
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

const MaskAlarm = styled.div`
  position: relative;
  margin-top: 19.5px;
  margin-left: 47px;
  border-radius: 18px;
  border: 1px solid ${(props) => (props.alert ? "#f40" : "transparent")};
  background: ${(props) => (props.alert ? "#f40" : "transparent")};
  width: 132px;
  height: 29px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.13px;
  cursor: ${(props) => (props.alert ? "pointer" : "default")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMaskIcon = styled(MaskIcon)`
  position: relative;
  margin-top: 20.5px;
  margin-left: 45px;
  width: 114px;
  height: 114px;
  flex-shrink: 0;
`;

const StyledNoMaskIcon = styled(NoMaskIcon)`
  position: relative;
  margin-top: 20.5px;
  margin-left: 63px;
  width: 114px;
  height: 114px;
  flex-shrink: 0;
`;

const MaskContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const Mask = ({ alert, mask }) => {
  return (
    <MaskContainer>
      <MaskText mask={mask}>
        {mask ? "마스크를 꼭 착용하세요" : "마스크는 필요없어요"}
      </MaskText>
      <MaskContent>
        <MaskAlarm alert={alert}>{alert ? "미세먼지 경보" : ""}</MaskAlarm>
        {mask ? (
          <>
            <StyledMaskIcon />
          </>
        ) : (
          <StyledNoMaskIcon />
        )}
      </MaskContent>
    </MaskContainer>
  );
};

export default Mask;
