import { Grid } from "@mui/material";
import React, { useState } from "react";
import { CustomInputContainer } from "./styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NumberInputProps } from "./types";

function NumberInput({
  name,
  fieldName,
  register,
  setValue,
  currentIndexValue,
  setCurrentIndexValue,
  disabled = false,
}: NumberInputProps) {
  const [customValue, setCustomValue] = useState<number>(1);

  return (
    <CustomInputContainer>
      {name && <p className="label">{name}</p>}

      <Grid className="input-container">
        <input
          type="number"
          disabled={disabled}
          defaultValue={
            currentIndexValue && currentIndexValue[fieldName]
              ? currentIndexValue[fieldName]
              : 1
          }
          {...register(fieldName)}
          className="custom-inputField"
        />
        <Grid className="arrow-container">
          <KeyboardArrowUpIcon
            className="upArrow"
            onClick={() => {
              if (!disabled) {
                setCustomValue(customValue + 1);
                setValue(fieldName, customValue);
                if (currentIndexValue) {
                  setCurrentIndexValue({
                    ...currentIndexValue,
                    [fieldName]: customValue,
                  });
                }
              }
            }}
          />
          <KeyboardArrowDownIcon
            className="downArrow"
            onClick={() => {
              if (!disabled) {
                setCustomValue(customValue <= 1 ? 1 : customValue - 1);
                setValue(fieldName, customValue);
                if (currentIndexValue) {
                  setCurrentIndexValue({
                    ...currentIndexValue,
                    [fieldName]: customValue,
                  });
                }
              }
            }}
          />
        </Grid>
      </Grid>
    </CustomInputContainer>
  );
}

export default NumberInput;
