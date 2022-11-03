/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NumberInput from "../../components/customInputs/NumberInput";
import CustomDropDown from "../../components/DropDown/CustomDropdown/Index";
import {
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
import { SEGMENTS, StrikeCriteria } from "./types";
import { inputList, leftButtonBorder, rightButtonBorder } from "./utils";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";
import CancelIcon from "@mui/icons-material/Cancel";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";

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
      console.log({ tempArr }, "ssss");
      setJsonData([...tempArr]);
    }
  }, [currentIndexValue]);

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
        </MainContainer>
      </Container>
    </HomePageWrapper>
  );
}

export default HomePage;
