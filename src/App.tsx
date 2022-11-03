import React, { useState } from "react";
import { styled, Grid } from "@mui/material";
import HomePage from "./pages/HomePage";
import fireBase from "./assests/svg/firebase.svg";

const MainContainer = styled("div")`
  width: 100%;
  min-height: 100vh;
`;

const NavBarContainer = styled(Grid)`
  min-height: 50px;
  padding: 1rem 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .deploy {
    padding: 0.7rem 1rem;
    text-transform: capitalize;
    font-family: "Roboto", sans-serif;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(88, 43, 255, 1) 24%,
      rgba(156, 17, 255, 1) 75%,
      rgba(219, 13, 245, 1) 100%
    );

    color: #fff;
    border: 1px solid #db46fc;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.3s ease-in-out;
    :hover {
      background: transparent;
      color: rgba(88, 43, 255, 1);
    }
  }
  .fireBase-Image {
    height: 1.5rem;
  }
`;
function App() {
  const [jsonData, setJsonData] = useState([]);
  const fireBaseDeploy = () => {
    const JsonObject = JSON.parse(JSON.stringify(jsonData));
  };
  return (
    <MainContainer>
      <NavBarContainer container lg={12} item>
        <button className="deploy" onClick={() => fireBaseDeploy()}>
          <img src={fireBase} className="fireBase-Image" alt="firebAse-logo" />
          deploy to firebase
        </button>
      </NavBarContainer>
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
