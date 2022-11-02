import { Grid } from "@mui/material";
import React, { useState } from "react";
import NumberInput from "../../components/customInputs/NumberInput";
import CustomDropDown from "../../components/DropDown/CustomDropdown/Index";
import {
  Container,
  CustomButton,
  FormContainer,
  HomePageWrapper,
  MainContainer,
  OptionsContainer,
  SegmentContainer,
} from "./styles";
import { SEGMENTS } from "./types";
import { inputList, leftButtonBorder, rightButtonBorder } from "./utils";
import { useForm } from "react-hook-form";

function HomePage() {
  const [segments, setSegments] = useState<SEGMENTS>("OPTIONS");
  const { register, handleSubmit, watch, setValue } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const selectedStrikeCriteria = watch("strikeCriteria");
  console.log(typeof selectedStrikeCriteria, "ssss");
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
        <OptionsContainer container item display="flex" lg={12}>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            {Array.isArray(inputList) &&
              inputList.length > 0 &&
              React.Children.toArray(
                inputList.map((value) => (
                  <>
                    {(() => {
                      switch (true) {
                        case value?.type === "DROPDOWN":
                          return (
                            <CustomDropDown
                              name={value.name}
                              fieldName={value.filedName}
                              lists={value.children}
                              register={register}
                            />
                          );
                        default:
                          return (
                            <NumberInput
                              name={value.name}
                              fieldName={value.filedName}
                              register={register}
                              setValue={setValue}
                            />
                          );
                      }
                    })()}
                  </>
                ))
              )}
          </FormContainer>
          <input type="submit" />
        </OptionsContainer>
      </MainContainer>
    </HomePageWrapper>
  );
}

export default HomePage;
