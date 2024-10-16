import styled from "styled-components";

export const TextBox = ({ text, top, left, fontSize, fontWeight }) => {
  return (
    <TextLabel
      top={top}
      left={left}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {text}
    </TextLabel>
  );
};

const TextLabel = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight}px;
  white-space: pre-line; /* 줄바꿈 적용 */
`;
