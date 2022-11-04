import { styled, Grid } from "@mui/material";

export const TableHeaderContainer = styled(Grid)`
  border: 1px solid #e4e7ec;
  padding: 0.3rem 2rem;
  width: fit-content;
  min-width: 15rem;
  text-transform: capitalize;
  min-height: 30px;
  :nth-child(even) {
    background: #a0a3f2;
  }
  :nth-child(odd) {
    background: #d6d7fa;
  }
`;

export const ShowFireBaseDataWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  overflow-x: auto;
  .table-container {
    width: 50rem;
    overflow-x: auto;
  }
`;
