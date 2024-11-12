import styled from "styled-components";

export const Button = ({ onClick, text, backgroundColor }) => {
  return (
    <ButtonBox onClick={onClick} backgroundColor={backgroundColor}>
      <ButtonText>{text}</ButtonText>
    </ButtonBox>
  );
};

const ButtonBox = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  margin-top: 103px;
  margin-bottom: 130px;
  justify-content: center;
  align-items: center;
  width: 197px;
  height: 59px;
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
