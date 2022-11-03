/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NumberInput from "../../components/customInputs/NumberInput";
import CustomDropDown from "../../components/DropDown/CustomDropdown/Index";
import {
  CheckBoxContainer,
  Container,
  CustomButton,
  FormContainer,
  HomePageWrapper,
  IconsContainer,
  MainContainer,
  OptionsContainer,
  SegmentContainer,
  StraddleWidthOptions,
} from "./styles";
import { CheckedProps, SEGMENTS, StrikeCriteria } from "./types";
import { inputList, leftButtonBorder, rightButtonBorder } from "./utils";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";
import CancelIcon from "@mui/icons-material/Cancel";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function HomePage({
  setJsonData,
  jsonData,
  currentValue,
}: {
  setJsonData: any;
  jsonData: any;
  currentValue?: any;
}) {
  const [segments, setSegments] = useState<SEGMENTS>("OPTIONS");
  const { register, handleSubmit, setValue } = useForm();
  const [checked, setChecked] = useState<CheckedProps>({
    simpleMovement: true,
    trailSl: true,
  });
  const [currentIndexValue, setCurrentIndexValue] = useState(
    currentValue ? currentValue : null
  );
  const [currentDropDownValue, setCurrentDropDownValue] = useState(
    currentIndexValue && currentIndexValue?.strikeCriteria
      ? currentIndexValue?.strikeCriteria
      : "Strike Type"
  );

  useEffect(() => {
    if (currentIndexValue) {
      const tempArr = [...jsonData];
      const index = tempArr.findIndex(
        (item: any) => item.id === currentIndexValue?.id
      );
      tempArr.splice(index, 1, currentIndexValue);
      setJsonData([...tempArr]);
    }
  }, [currentIndexValue]);

  useEffect(() => {
    if (checked.simpleMovement && currentIndexValue) {
      const tempArr = { ...currentIndexValue };
      const keys = Object.keys(currentIndexValue);
      const deleteValue = ["simpleMomentumType", "simpleMomentumValue"];
      deleteValue.forEach((value) => {
        if (keys.includes(value)) {
          delete tempArr[value];
        }
      });
      setCurrentIndexValue(tempArr);
    }
    if (checked.trailSl && currentIndexValue) {
      const tempArr = { ...currentIndexValue };
      const keys = Object.keys(currentIndexValue);
      const deleteValue = ["instrumentMove", "stopLossMove", "trailSlType"];
      deleteValue.forEach((value) => {
        if (keys.includes(value)) {
          delete tempArr[value];
        }
      });
      setCurrentIndexValue(tempArr);
    }
  }, [checked]);

  const onSubmit = (data: any) => {
    data = { ...data, id: uuid(), Lots: String(data?.Lots) };
    setJsonData((arr: any) => [...arr, data]);
  };

  const deletion = () => {
    if (currentIndexValue) {
      const tempArr = [...jsonData];
      const index = tempArr.findIndex(
        (item: any) => item.id === currentIndexValue?.id
      );
      tempArr.splice(index, 1);
      setJsonData([...tempArr]);
    }
  };

  const currentIndexValueDuplication = () => {
    if (currentIndexValue) {
      const duplicateValue = { ...currentIndexValue, id: uuid() };
      setJsonData((arr: any) => [...arr, duplicateValue]);
    }
  };

  const handleStrikeCriteria = () => {
    switch (true) {
      case currentDropDownValue === StrikeCriteria.STRADDLE_WIDTH:
        return (
          <StraddleWidthOptions
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            [ATM Strike{" "}
            <CustomDropDown
              currentIndexValue={currentIndexValue}
              name=""
              setCurrentDropDownValue={setCurrentDropDownValue}
              fieldName="atmStrike"
              lists={["+", "-"]}
              register={register}
              setCurrentIndexValue={setCurrentIndexValue}
            />{" "}
            (
            <NumberInput
              setCurrentIndexValue={setCurrentIndexValue}
              currentIndexValue={currentIndexValue}
              name=""
              fieldName="strikeAdjustMent"
              register={register}
              setValue={setValue}
            />{" "}
            &times; ATM Straddle Price ) ]
          </StraddleWidthOptions>
        );
      case currentDropDownValue === StrikeCriteria.PREMIUM_RANGE:
        return (
          <Grid display="flex">
            <NumberInput
              setCurrentIndexValue={setCurrentIndexValue}
              currentIndexValue={currentIndexValue}
              name="Lower Range"
              fieldName="lowerRange"
              register={register}
              setValue={setValue}
            />
            <NumberInput
              setCurrentIndexValue={setCurrentIndexValue}
              currentIndexValue={currentIndexValue}
              name="Upper Range"
              fieldName="upperRange"
              register={register}
              setValue={setValue}
            />
          </Grid>
        );
      case currentDropDownValue === StrikeCriteria.STRIKE_TYPE:
        return (
          <CustomDropDown
            currentIndexValue={currentIndexValue}
            setCurrentIndexValue={setCurrentIndexValue}
            setCurrentDropDownValue={setCurrentDropDownValue}
            name="Strike Type"
            fieldName="strikeType"
            lists={["ATM", "OTM1"]}
            register={register}
          />
        );
      default:
        return <></>;
    }
  };
  return (
    <HomePageWrapper display="flex" justifyContent="center" alignItems="center">
      <Container showContainer={!!currentIndexValue}>
        <MainContainer
          className="mainContainer"
          justifyContent="center"
          alignItems="center"
          item
          lg={12}
        >
          {currentIndexValue && (
            <IconsContainer>
              <CancelIcon className="close-icon" onClick={() => deletion()} />
              <span className="clipboard-copy-container">
                <ContentCopyTwoToneIcon
                  className="clipboard"
                  onClick={() => currentIndexValueDuplication()}
                />
              </span>
            </IconsContainer>
          )}

          {!currentIndexValue && (
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
          )}

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
                                setCurrentIndexValue={setCurrentIndexValue}
                                currentIndexValue={currentIndexValue}
                                setCurrentDropDownValue={
                                  setCurrentDropDownValue
                                }
                                name={value.name}
                                fieldName={value.filedName}
                                lists={value.children}
                                register={register}
                              />
                            );
                          default:
                            return (
                              <NumberInput
                                setCurrentIndexValue={setCurrentIndexValue}
                                currentIndexValue={currentIndexValue}
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
              {!currentIndexValue && (
                <Grid className="submit-container" container item lg={12}>
                  <input className="submit btn" type="submit" value="Add Leg" />
                  <input className="cancel btn" type="button" value="cancel" />
                </Grid>
              )}
            </FormContainer>
          </OptionsContainer>
          {currentIndexValue && (
            <CheckBoxContainer container lg={12}>
              <Grid className="checkBox-container">
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={() => {
                        setChecked({
                          ...checked,
                          simpleMovement: !checked.simpleMovement,
                        });
                      }}
                    />
                  }
                  label="Simple Momentum"
                />
                <Grid display="flex" justify-content="center">
                  <CustomDropDown
                    currentIndexValue={currentIndexValue}
                    name=""
                    disabled={checked.simpleMovement}
                    setCurrentDropDownValue={setCurrentDropDownValue}
                    fieldName="simpleMomentumType"
                    lists={[
                      "points ↑",
                      "Points ↓",
                      "Percentage ↑",
                      "Percentage ↓",
                      "Underlying Points ↑",
                      "Underlying Points ↓",
                      "Underlying Percentage ↑",
                      "Underlying Percentage ↓",
                    ]}
                    register={register}
                    setCurrentIndexValue={setCurrentIndexValue}
                  />
                  <NumberInput
                    setCurrentIndexValue={setCurrentIndexValue}
                    currentIndexValue={currentIndexValue}
                    disabled={checked.simpleMovement}
                    name=""
                    fieldName="simpleMomentumValue"
                    register={register}
                    setValue={setValue}
                  />
                </Grid>
              </Grid>
              <Grid className="checkBox-container">
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={() => {
                        setChecked({
                          ...checked,
                          trailSl: !checked.trailSl,
                        });
                      }}
                    />
                  }
                  label="Trail sl"
                />
                <Grid display="flex" justify-content="center">
                  <CustomDropDown
                    currentIndexValue={currentIndexValue}
                    disabled={checked.trailSl}
                    name=""
                    setCurrentDropDownValue={setCurrentDropDownValue}
                    fieldName="trailSlType"
                    lists={["points ", "Percentage "]}
                    register={register}
                    setCurrentIndexValue={setCurrentIndexValue}
                  />
                  <NumberInput
                    setCurrentIndexValue={setCurrentIndexValue}
                    currentIndexValue={currentIndexValue}
                    name=""
                    disabled={checked.trailSl}
                    fieldName="instrumentMove"
                    register={register}
                    setValue={setValue}
                  />
                  <NumberInput
                    setCurrentIndexValue={setCurrentIndexValue}
                    currentIndexValue={currentIndexValue}
                    name=""
                    disabled={checked.trailSl}
                    fieldName="stopLossMove"
                    register={register}
                    setValue={setValue}
                  />
                </Grid>
              </Grid>
            </CheckBoxContainer>
          )}
        </MainContainer>
      </Container>
    </HomePageWrapper>
  );
}

export default HomePage;
