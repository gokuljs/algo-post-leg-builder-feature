import React, { useState } from "react";
import { styled } from "@mui/material";
import HomePage from "./pages/HomePage";

const MainContainer = styled("div")`
  width: 100%;
  min-width: 100vh;
`;

function App() {
  const [jsonData, setJsonData] = useState([]);
  console.log(jsonData, "ssss");
  return (
    <MainContainer>
      <HomePage setJsonData={setJsonData} jsonData={jsonData} />
      {Array.isArray(jsonData) &&
        jsonData.length > 0 &&
        React.Children.toArray(
          jsonData.map((value) => (
            <HomePage
              setJsonData={setJsonData}
              jsonData={jsonData}
              currentValue={value}
            />
          ))
        )}
    </MainContainer>
  );
}

export default App;
