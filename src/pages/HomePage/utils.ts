import { BorderProps, InputListProps } from "./types";

export const leftButtonBorder: BorderProps = {
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",
};
export const rightButtonBorder: BorderProps = {
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
};

export const inputList: InputListProps[] = [
  {
    name: "Total lot",
    type: "NUMBER_INPUT",
    filedName: "Lots",
  },
  {
    name: "Position",
    type: "DROPDOWN",
    children: ["BUY", "SELL"],
    filedName: "position",
  },
  {
    name: "Options Type",
    type: "DROPDOWN",
    filedName: "optionType",
    children: ["Call", "Put"],
  },
  {
    name: "Expiry",
    type: "DROPDOWN",
    filedName: "expiry",
    children: ["Weekly", "Monthly"],
  },
];
