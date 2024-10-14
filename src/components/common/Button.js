import styled from "styled-components";

export const Button = ({ left, top, text, backgroundColor }) => {
  return (
    <ButtonBox top={top} left={left} backgroundColor={backgroundColor}>
      <ButtonText>{text}</ButtonText>
    </ButtonBox>
  );
};

const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 197px;
  height: 59px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 31px;
`;

const ButtonText = styled.div`
  width: 155px;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
`;
