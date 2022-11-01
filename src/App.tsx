import React from "react";
import { styled } from "@mui/material";
import HomePage from "./pages/HomePage";

const MainContainer = styled("div")`
  width: 100%;
  min-width: 100vh;
`;

function App() {
  return (
    <MainContainer>
      <HomePage />
    </MainContainer>
  );
}

export default App;
