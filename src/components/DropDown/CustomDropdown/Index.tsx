import { Grid } from "@mui/material";
import React from "react";
import { CustomSelect, CustomSelectContainer } from "./styles";

function CustomDropDown({
  name,
  fieldName,
  lists,
  register,
}: {
  name: string;
  fieldName: string;
  lists?: any[];
  register: any;
}) {
  return (
    <CustomSelectContainer>
      <p className="label">{name}</p>
      <Grid>
        <CustomSelect {...register(fieldName)}>
          {lists &&
            Array.isArray(lists) &&
            lists.length > 0 &&
            React.Children.toArray(
              lists.map((value) => (
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
