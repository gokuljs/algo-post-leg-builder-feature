import { Grid } from "@mui/material";
import React from "react";
import { CustomSelect, CustomSelectContainer } from "./styles";

function CustomDropDown() {
  return (
    <CustomSelectContainer>
      <p className="label"> name</p>
      <Grid>
        <CustomSelect className="Select-tag" name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </CustomSelect>
      </Grid>
    </CustomSelectContainer>
  );
}

export default CustomDropDown;
