export type SEGMENTS = "FUTURES" | "OPTIONS";

export type BorderProps = {
  borderTopLeftRadius?: string;
  borderBottomLeftRadius?: String;
  borderTopRightRadius?: string;
  borderBottomRightRadius?: string;
};

export type CustomButtonProps = {
  borderDesign: any;
  selected: boolean;
};

export type InputListProps = {
  name: string;
  filedName: string;
  type: "DROPDOWN" | "NUMBER_INPUT";
  children?: any[];
};

export enum StrikeCriteria {
  STRIKE_TYPE = "Strike Type",
  PREMIUM_RANGE = "Premium Range",
  STRADDLE_WIDTH = "Straddle Width",
}
