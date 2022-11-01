import React from "react";
import { Container, HomePageWrapper, MainContainer } from "./styles";

function HomePage() {
  return (
    <HomePageWrapper display="flex" justifyContent="center" alignItems="center">
      <Container display="flex" justifyContent="center" alignItems="center">
        <MainContainer className="mainContainer" container lg={12}>
          hello world
        </MainContainer>
      </Container>
    </HomePageWrapper>
  );
}

export default HomePage;
