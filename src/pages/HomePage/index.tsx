import { Grid } from "@mui/material";
import React, { useState } from "react";
import NumberInput from "../../components/customInputs/NumberInput";
import CustomDropDown from "../../components/DropDown/CustomDropdown/Index";
import {
  Container,
  CustomButton,
  HomePageWrapper,
  MainContainer,
  OptionsContainer,
  SegmentContainer,
} from "./styles";
import { SEGMENTS } from "./types";
import { inputList, leftButtonBorder, rightButtonBorder } from "./utils";

function HomePage() {
  const [segments, setSegments] = useState<SEGMENTS>("FUTURES");

  return (
    <HomePageWrapper display="flex" justifyContent="center" alignItems="center">
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
        <OptionsContainer
          container
          item
          display="flex"
          lg={12}
        ></OptionsContainer>
      </MainContainer>
    </HomePageWrapper>
  );
}

export default HomePage;
