import { Grid } from "@mui/material";
import React, { useId, useState } from "react";
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
  StraddleWidthOptions,
} from "./styles";
import { SEGMENTS, StrikeCriteria } from "./types";
import { inputList, leftButtonBorder, rightButtonBorder } from "./utils";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";

function HomePage({ setJsonData }: { setJsonData: any }) {
  const [segments, setSegments] = useState<SEGMENTS>("OPTIONS");
  const { register, handleSubmit, watch, setValue } = useForm();
  const onSubmit = (data: any) => {
    data = { ...data, id: uuid(), Lots: String(data?.Lots) };
    setJsonData((arr: []) => [...arr, data]);
  };
  const selectedStrikeCriteria = watch("strikeCriteria");

  const handleStrikeCriteria = () => {
    switch (true) {
      case selectedStrikeCriteria === StrikeCriteria.STRADDLE_WIDTH:
        return (
          <StraddleWidthOptions
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            [ATM Strike{" "}
            <CustomDropDown
              name=""
              fieldName="atmStrike"
              lists={["+", "-"]}
              register={register}
            />{" "}
            (
            <NumberInput
              name=""
              fieldName="strikeAdjustMent"
              register={register}
              setValue={setValue}
            />{" "}
            &times; ATM Straddle Price ) ]
          </StraddleWidthOptions>
        );
      case selectedStrikeCriteria === StrikeCriteria.PREMIUM_RANGE:
        return (
          <Grid display="flex">
            <NumberInput
              name="Lower Range"
              fieldName="lowerRange"
              register={register}
              setValue={setValue}
            />
            <NumberInput
              name="Upper Range"
              fieldName="upperRange"
              register={register}
              setValue={setValue}
            />
          </Grid>
        );
      default:
        return (
          <CustomDropDown
            name="Strike Type"
            fieldName="strikeType"
            lists={["ATM", "OTM1"]}
            register={register}
          />
        );
    }
  };
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
            {handleStrikeCriteria()}
            <Grid className="submit-container" container item lg={12}>
              <input className="submit btn" type="submit" />
              <input className="cancel btn" type="button" value="cancel" />
            </Grid>
          </FormContainer>
        </OptionsContainer>
      </MainContainer>
    </HomePageWrapper>
  );
}

export default HomePage;
