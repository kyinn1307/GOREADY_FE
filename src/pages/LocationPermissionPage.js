import styled from "styled-components";
import { ReactComponent as MapImage } from "../assets/images/mapImage.svg";
import { ReactComponent as LocationButton } from "../assets/images/locationButton.svg";
import { ReactComponent as GoReadyLogo } from "../assets/images/goReadyLogo.svg";
import { TextBox } from "../components/common/TextBox";
import { Button } from "../components/common/Button";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { useEffect, useState } from "react";
import { useLocationInfo } from "../context/GeoInfoContext";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 360,
};

export const LocationPermissionPage = () => {
  const { location, error, getLocation } = useGeoLocation(geolocationOptions);
  const { geoLocation, updateLocation } = useLocationInfo();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location && location.latitude != null && location.longitude != null) {
      updateLocation(location.latitude, location.longitude);
      setIsLoading(false);
      navigate("/info");
    } else if (error) {
      setIsLoading(false);
    }
  }, [location, error]);

  const handleGetLocation = () => {
    setIsLoading(true);
    getLocation();
  };

  return (
    <Container>
      {isLoading ? (
        <Loading>
          위치정보를 받아오는 중입니다...
          <SyncLoader />
        </Loading>
      ) : (
        <>
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
            onClick={handleGetLocation}
          />
        </>
      )}
    </Container>
  );
};

const Loading = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

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
