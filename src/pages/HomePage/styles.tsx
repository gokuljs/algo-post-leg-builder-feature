import { styled, Grid } from "@mui/material";
import { CustomButtonProps } from "./types";

export const HomePageWrapper = styled(Grid)`
  width: 100%;
  min-height: 40vh;
  padding: 3rem 1rem;
`;

export const Container = styled(Grid)(() => ({
  width: "90%",
  minHeight: "40vh",
  padding: "2rem",
  background: "#d8c6bb47",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
}));

export const MainContainer = styled(Grid)(() => ({
  width: "90%",
  minHeight: "40vh",
  padding: "2rem",
  backgroundColor: "#F4EBE7",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
}));

export const SegmentContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  .button-container {
    margin-left: 1rem;
  }
`;

export const CustomButton = styled("button")(
  ({ borderDesign, selected }: CustomButtonProps) => ({
    padding: "0.25rem 1rem",
    border: "1px solid #D0D5DD",
    background: selected ? "#044DBA" : "white",
    margin: "0",
    transition: "0.3s all ease-in",
    color: selected ? "white" : "#101828",
    ...borderDesign,
  })
);

export const OptionsContainer = styled(Grid)`
  .select-tag {
    border: none;
    min-width: 6rem;
    outline: none;
    padding: 0.25rem 0.5rem;
  }
  .label-tag {
    margin-right: 0.3rem;
  }
  input[type="number"] {
    min-width: 10px;
  }
`;

export const FormContainer = styled("form")`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem;
  align-items: center;
  flex-wrap: wrap;
  .submit-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    .submit {
      padding: 0.5rem 1.2rem;
      color: #ecf2fc;
      text-transform: uppercase;
      font-family: sans-serif;
      background-color: #0b5cd7;
      border: 1px solid #0b5cd733;
      transition: all 0.2s ease-in-out;
      margin: 0 1rem;
      :hover {
        color: #0b5cd7;
        background-color: #ecf2fc;
      }
    }
    .cancel {
      padding: 0.5rem 1.2rem;
      text-transform: uppercase;
      font-family: sans-serif;
      border: 1px solid #101828;
      background-color: #1d2939;
      transition: all 0.2s ease-in-out;
      color: #ffffff;
      :hover {
        color: #101828;
        background-color: #f9fafb;
        border: 1px solid #e4e7ec;
      }
    }
  }
`;

export const StraddleWidthOptions = styled(Grid)`
  margin: 1rem;
`;
