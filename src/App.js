import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { LocationPermissionPage } from "./pages/LocationPermissionPage";
import { useEffect } from "react";
import GoreadyInfoPage from "./pages/GoreadyInfoPage";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LocationPermissionPage />} />
        <Route path="/info" element={<GoreadyInfoPage />} />
      </Routes>
    </>
  );
}

export default App;
