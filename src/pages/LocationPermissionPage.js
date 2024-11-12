import styled from "styled-components";
import { ReactComponent as MapImage } from "../assets/images/mapImage.svg";
import { ReactComponent as LocationButton } from "../assets/images/locationButton.svg";
import { ReactComponent as GoReadyLogo } from "../assets/images/goReadyLogo.svg";
import { TextBox } from "../components/common/TextBox";
import { Button } from "../components/common/Button";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { useEffect } from "react";
import { useLocationInfo } from "../context/GeoInfoContext";
import { useNavigate } from "react-router-dom";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export const LocationPermissionPage = () => {
  const { location, error, getLocation } = useGeoLocation(geolocationOptions);
  const { geoLocation, updateLocation } = useLocationInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (location && location.latitude != null && location.longitude != null) {
      console.log(location);
      updateLocation(location.latitude, location.longitude);
      console.log("위도 경도", geoLocation);
      navigate("/info");
    } else if (error) {
      console.log("Error:", error);
    }
  }, [location, error]);

  return (
    <Container>
      <StyledLocationButton />
      <StyledLogo />
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
          text={"Go Ready는 사용자의 위치가 필요해요!"}
          fontSize={25}
          fontWeight={600}
          width={309}
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

const StyledLogo = styled(GoReadyLogo)`
  position: relative;
  margin-top: 53px;
`;

const StyledLocationButton = styled(LocationButton)`
  position: absolute;
  left: 322px;
  top: 58px;
  cursor: pointer;
`;

const StyledMapImage = styled(MapImage)`
  position: relative;
  margin-top: 14px;
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 81px;
  gap: 10px;
`;
