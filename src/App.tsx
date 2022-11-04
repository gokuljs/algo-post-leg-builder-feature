import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import fireBase from "./assets/svg/firebase.svg";
import { db } from "./firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";
import { MainContainer, NavBarContainer } from "./styles";
import { AlgoPostDataProps } from "./types";
import Dialog from "@mui/material/Dialog";
import DisplayFireBaseData from "./pages/HomePage/components/showFireBaseData";

function App() {
  const [jsonData, setJsonData] = useState<AlgoPostDataProps[] | []>([]);
  const [fetchData, setFetchData] = useState<AlgoPostDataProps[] | []>([]);
  const [showDataSet, setShowDataSet] = useState<boolean>(false);
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
  }, [isLoading]);

  return (
    <MainContainer>
      <NavBarContainer container lg={12} item>
        {Array.isArray(fetchData) && fetchData.length > 0 && (
          <button className="deploy" onClick={() => setShowDataSet(true)}>
            Dataset
          </button>
        )}

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

      {Array.isArray(fetchData) && fetchData.length > 0 && (
        <Dialog
          open={showDataSet}
          onClose={() => {
            setShowDataSet(false);
          }}
          maxWidth={"xl"}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DisplayFireBaseData
            fetchData={fetchData}
            setShowDataSet={setShowDataSet}
          />
        </Dialog>
      )}
    </MainContainer>
  );
}

export default App;
