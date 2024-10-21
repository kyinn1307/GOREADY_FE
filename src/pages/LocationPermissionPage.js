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
      <TextBox
        text="반가워요 ,"
        top={427}
        left={57}
        fontSize={18}
        fontWeight={400}
      />
      <TextBox
        text={"외출준비는 사용자의 위치가\n필요해요!"}
        top={474}
        left={56}
        fontSize={25}
        fontWeight={600}
      />
      <Button
        text="위치 권한 허용하기"
        top={609}
        left={99}
        backgroundColor={"#000000"}
        onClick={getLocation}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

const StyledLocationButton = styled(LocationButton)`
  position: absolute;
  left: 322px;
  top: 58px;
  cursor: pointer;
`;

const StyledMapImage = styled(MapImage)`
  position: absolute;
  top: 117px;
  left: 82px;
`;
