import { Grid, styled } from "@mui/material";

export const CustomInputContainer = styled(Grid)`
  width: fit-content;
  height: fit-content;
  display: flex;
  margin: 0 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    display: none;
  }
  .label {
    padding: 0;
    margin: 0;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    font-family: sans-serif;
  }
  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 24px;
    padding: 0 0.5rem;
  }
  .custom-inputField {
    width: 4rem;
    padding: 0.25rem 0.5rem;
    border: none;
    outline: none;
    background: transparent;
  }
  .arrow-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 0;
  }
  .upArrow {
    padding: 0;
    font-size: 1rem;
    cursor: pointer;
  }
  .downArrow {
    padding: 0;
    font-size: 1rem;
    cursor: pointer;
  }
`;
