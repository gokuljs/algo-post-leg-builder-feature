import { Grid, styled } from "@mui/material";

export const CustomSelectContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .label {
    padding: 0;
    margin: 0;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    font-family: sans-serif;
  }
`;

export const CustomSelect = styled("select")`
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 24px;
  min-width: 4rem;
  padding: 0 0.5rem;
  height: 32px;
`;
