import { Grid } from "@mui/material";
import React, { useState } from "react";
import {
  Container,
  CustomButton,
  HomePageWrapper,
  MainContainer,
  OptionsContainer,
  SegmentContainer,
} from "./styles";
import { SEGMENTS } from "./types";
import { leftButtonBorder, rightButtonBorder } from "./utils";

function HomePage() {
  const [segments, setSegments] = useState<SEGMENTS>("FUTURES");
  const [jsonData, setJsonData] = useState({});

  return (
    <HomePageWrapper display="flex" justifyContent="center" alignItems="center">
      <Container display="flex" justifyContent="center" alignItems="center">
        <MainContainer
          className="mainContainer"
          justifyContent="center"
          alignItems="center"
          item
          lg={12}
        >
          <SegmentContainer>
            <p className="segments-text">Select Segments</p>
            <Grid className="button-container">
              <CustomButton
                borderDesign={leftButtonBorder}
                onClick={() => setSegments("FUTURES")}
                selected={segments === "FUTURES"}
              >
                Futures
              </CustomButton>
              <CustomButton
                borderDesign={rightButtonBorder}
                onClick={() => setSegments("OPTIONS")}
                selected={segments === "OPTIONS"}
              >
                Options
              </CustomButton>
            </Grid>
          </SegmentContainer>
          <OptionsContainer container item lg={12}>
            hello
          </OptionsContainer>
        </MainContainer>
      </Container>
    </HomePageWrapper>
  );
}

export default HomePage;
