import { Grid } from "@mui/material";
import React from "react";
import { CustomSelect, CustomSelectContainer } from "./styles";
import { DropDownProps } from "./types";

function CustomDropDown({
  name,
  fieldName,
  lists,
  register,
  currentIndexValue,
  setCurrentIndexValue,
  setCurrentDropDownValue,
  disabled = false,
}: DropDownProps) {
  const handleDropDownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (fieldName === "strikeCriteria" && e.target.value) {
      setCurrentDropDownValue(e.target.value);
    }
    if (currentIndexValue) {
      setCurrentIndexValue({
        ...currentIndexValue,
        [fieldName]: e.target.value,
      });
    }
  };

  return (
    <CustomSelectContainer>
      {name && <p className="label">{name}</p>}
      <Grid>
        <CustomSelect
          hasDefaultValue={!!currentIndexValue}
          disabled={disabled}
          defaultValue={
            currentIndexValue && currentIndexValue[fieldName]
              ? currentIndexValue[fieldName]
              : ""
          }
          {...register(fieldName)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleDropDownChange(e);
          }}
        >
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
