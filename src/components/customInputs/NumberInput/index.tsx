import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomInputContainer } from "./styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function NumberInput() {
  const [value, setValue] = useState<number>(1);
  useEffect(() => {
    if (value <= 1) {
      setValue(1);
    }
  }, [value]);
  return (
    <CustomInputContainer>
      <p className="label">name</p>
      <Grid className="input-container">
        <input
          type="Number"
          value={value}
          min="1"
          className="custom-inputField"
        />
        <Grid className="arrow-container">
          <KeyboardArrowUpIcon
            className="upArrow"
            onClick={() => setValue(value + 1)}
          />
          <KeyboardArrowDownIcon
            className="downArrow"
            onClick={() => setValue(value - 1)}
          />
        </Grid>
      </Grid>
    </CustomInputContainer>
  );
}

export default NumberInput;
