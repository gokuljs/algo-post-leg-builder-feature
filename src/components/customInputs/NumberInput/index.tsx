import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomInputContainer } from "./styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function NumberInput({
  name,
  fieldName,
  register,
  setValue,
}: {
  name: string;
  fieldName: string;
  register?: any;
  setValue: any;
}) {
  const [customValue, setCustomValue] = useState<number>(1);
  useEffect(() => {
    if (customValue <= 1) {
      setCustomValue(1);
    }
  }, [customValue]);
  return (
    <CustomInputContainer>
      <p className="label">{name}</p>
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
