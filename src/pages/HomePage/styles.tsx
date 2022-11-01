import { styled, Grid } from "@mui/material";
import { CustomButtonProps } from "./types";

export const HomePageWrapper = styled(Grid)`
  width: 100%;
  min-height: 40vh;
  padding: 3rem 2rem;
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

export const OptionsContainer = styled(Grid)``;
