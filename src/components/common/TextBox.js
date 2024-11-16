import styled from "styled-components";

export const TextBox = ({ text, width, height, fontSize, fontWeight }) => {
  return (
    <TextLabel
      fontSize={fontSize}
      fontWeight={fontWeight}
      width={width}
      height={height}
    >
      {text}
    </TextLabel>
  );
};

const TextLabel = styled.div`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  white-space: pre-line;
  font-family: "Pretendard";
`;
