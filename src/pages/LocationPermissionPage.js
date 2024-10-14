import styled from "styled-components";
import { ReactComponent as MapImage } from "../assets/images/mapImage.svg";
import { ReactComponent as LocationButton } from "../assets/images/locationButton.svg";
import { TextBox } from "../components/common/TextBox";
import { Button } from "../components/common/Button";
export const LocationPermissionPage = () => {
  return (
    <Container>
      <StyledLocationButton />
      <StyledMapImage />
      <TextBox
        text="반가워요 ,"
        top={481}
        left={57}
        fontSize={18}
        fontWeight={400}
      />
      <TextBox
        text={"외출준비는 사용자의 위치가\n필요해요!"}
        top={528}
        left={56}
        fontSize={25}
        fontWeight={600}
      />
      <Button
        text="위치 권한 허용하기"
        top={663}
        left={99}
        backgroundColor={"#000000"}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 393px;
  height: 852px;
`;

const StyledLocationButton = styled(LocationButton)`
  position: absolute;
  left: 322px;
  top: 112px;
  cursor: pointer;
`;

const StyledMapImage = styled(MapImage)`
  position: absolute;
  top: 171px;
  left: 82px;
`;
