import { styled, Grid } from "@mui/material";

export const MainContainer = styled("div")`
  width: 100%;
  min-height: 100vh;
`;

export const NavBarContainer = styled(Grid)`
  min-height: 50px;
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1rem;
  .deploy {
    min-width: 100px;
    min-height: 50px;
    margin-right: 1rem;
    padding: 0.7rem 1rem;
    text-transform: capitalize;
    font-family: "Roboto", sans-serif;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(88, 43, 255, 1) 24%,
      rgba(156, 17, 255, 1) 75%,
      rgba(219, 13, 245, 1) 100%
    );

    color: #fff;
    border: 1px solid #db46fc;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.3s ease-in-out;
    :hover {
      background: transparent;
      color: rgba(88, 43, 255, 1);
    }
    .storage {
      font-size: 1rem;
      margin-right: 0.25rem;
    }

    .progressBar-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;
    }
  }
  .fireBase-Image {
    height: 1.5rem;
  }
`;
