import { Dispatch } from "react";
export type DropDownProps = {
  name?: string;
  fieldName: string;
  lists?: any[];
  register: any;
  setCurrentDropDownValue: Dispatch<string>;
  currentIndexValue: any;
  setCurrentIndexValue: Dispatch<any>;
  disabled?: boolean;
};
