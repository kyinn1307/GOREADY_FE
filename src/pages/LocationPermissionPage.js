import styled from "styled-components";
import { ReactComponent as MapImage } from "../assets/images/mapImage.svg";
import { ReactComponent as LocationButton } from "../assets/images/locationButton.svg";
import { TextBox } from "../components/common/TextBox";
import { Button } from "../components/common/Button";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { useEffect } from "react";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export const LocationPermissionPage = () => {
  const { location, error, getLocation } = useGeoLocation(geolocationOptions);

  useEffect(() => {
    if (location) {
      console.log({ location });
    }
    if (error) {
      console.log("Error:", error);
    }
  }, [location, error]);

  return (
    <Container>
      <StyledLocationButton />
      <StyledMapImage />
      <TextContainer>
        <TextBox
          text="반가워요 ,"
          fontSize={18}
          fontWeight={400}
          width={84}
          height={39}
        />
        <TextBox
          text={"외출준비는 사용자의 위치가\n필요해요!"}
          fontSize={25}
          fontWeight={600}
          width={275}
          height={52}
        />
      </TextContainer>
      <Button
        text="위치 권한 허용하기"
        backgroundColor={"#000000"}
        onClick={getLocation}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 393px;
`;

const StyledLocationButton = styled(LocationButton)`
  position: absolute;
  left: 322px;
  top: 58px;
  cursor: pointer;
`;

const StyledMapImage = styled(MapImage)`
  position: relative;
  margin-top: 117px;
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 81px;
  gap: 10px;
`;
