import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { LocationPermissionPage } from "./pages/LocationPermissionPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LocationPermissionPage />} />
      </Routes>
    </>
  );
}

export default App;
