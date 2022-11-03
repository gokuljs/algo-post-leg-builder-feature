import { Dispatch } from "react";

export type NumberInputProps = {
  name?: string;
  fieldName: string;
  register?: any;
  setValue: any;
  currentIndexValue: any;
  setCurrentIndexValue: Dispatch<any>;
  disabled?: boolean;
};
