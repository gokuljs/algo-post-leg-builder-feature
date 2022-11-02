import { Grid } from "@mui/material";
import React from "react";
import { CustomSelect, CustomSelectContainer } from "./styles";
import { DropDownProps } from "./types";

function CustomDropDown({ name, fieldName, lists, register }: DropDownProps) {
  return (
    <CustomSelectContainer>
      {name && <p className="label">{name}</p>}
      <Grid>
        <CustomSelect {...register(fieldName)}>
          {lists &&
            Array.isArray(lists) &&
            lists.length > 0 &&
            React.Children.toArray(
              lists.map((value, index) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))
            )}
        </CustomSelect>
      </Grid>
    </CustomSelectContainer>
  );
}

export default CustomDropDown;
