import { styled, Grid } from "@mui/material";

export const HomePageWrapper = styled(Grid)`
  border: 1px solid black;
  width: 100%;
  min-height: 40vh;
  padding: 3rem 2rem;
`;

export const Container = styled(Grid)(() => ({
  width: "90%",
  minHeight: "40vh",
  padding: "2rem",
}));

export const MainContainer = styled(Grid)(() => ({
  width: "90%",
  minHeight: "40vh",
  padding: "2rem",
  border: "1px solid black",
}));
