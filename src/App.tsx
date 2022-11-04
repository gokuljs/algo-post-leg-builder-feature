import React, { useState, useEffect } from "react";
import { styled, Grid } from "@mui/material";
import HomePage from "./pages/HomePage";
import fireBase from "./assests/svg/firebase.svg";
import { db } from "./firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";

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
    .progressBar-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;
    }
  }
  .fireBase-Image {
    height: 1.5rem;
  }
`;

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [fetchData, setFetchData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const userCollectionRef = collection(db, "algoPost");
  const fireBaseDeploy = async () => {
    if (jsonData.length > 0) {
      setLoading(true);
      await addDoc(userCollectionRef, { jsonData });
      await setLoading(false);
      setJsonData([]);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userCollectionRef);
      const dataSet = data.docs.map((doc) => doc.data());
      const modifiedData: any =
        dataSet.length > 0 && dataSet.map((item: any) => item?.jsonData[0]);
      if (Array.isArray(modifiedData) && modifiedData.length > 0) {
        setFetchData([...modifiedData]);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(fetchData, "ssss");

  return (
    <MainContainer>
      <NavBarContainer container lg={12} item>
        <button className="deploy" onClick={() => fireBaseDeploy()}>
          {isLoading ? (
            <span className="progressBar-container">
              <CircularProgress size={15} color="warning" />
            </span>
          ) : (
            <img
              src={fireBase}
              className="fireBase-Image"
              alt="firebAse-logo"
            />
          )}
          {isLoading ? "Deploying" : "Deploy"} to firebase
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
