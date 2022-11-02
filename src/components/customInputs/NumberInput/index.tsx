import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomInputContainer } from "./styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NumberInputProps } from "./types";

function NumberInput({
  name,
  fieldName,
  register,
  setValue,
}: NumberInputProps) {
  const [customValue, setCustomValue] = useState<number>(1);
  useEffect(() => {
    if (customValue <= 1) {
      setCustomValue(1);
    }
  }, [customValue]);
  return (
    <CustomInputContainer>
      {name && <p className="label">{name}</p>}

      <Grid className="input-container">
        <input
          type="number"
          defaultValue={1}
          {...register(fieldName)}
          className="custom-inputField"
        />
        <Grid className="arrow-container">
          <KeyboardArrowUpIcon
            className="upArrow"
            onClick={() => {
              setCustomValue(customValue + 1);
              setValue(fieldName, customValue);
            }}
          />
          <KeyboardArrowDownIcon
            className="downArrow"
            onClick={() => {
              setCustomValue(customValue - 1);
              setValue(fieldName, customValue);
            }}
          />
        </Grid>
      </Grid>
    </CustomInputContainer>
  );
}

export default NumberInput;
