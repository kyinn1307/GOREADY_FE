import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { LocationPermissionPage } from "./pages/LocationPermissionPage";
import GoreadyInfoPage from "./pages/GoreadyInfoPage";

function App() {
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
