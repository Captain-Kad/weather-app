import React from "react";
import styled from "@emotion/styled";

const Header = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const AppTitle = () => {
  return (
    <Header>
      <Title>Weather App</Title>
    </Header>
  );
};

export default AppTitle;
