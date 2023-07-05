import React from "react";
import styled from "@emotion/styled";

const Location = (props) => {
  const Container = styled.div`
    text-align: center;
  `;

  const City = styled.h1`
    font-family: "Merriweather", sans-serif;
    font-size: 1.6rem;
  `;

  const Country = styled.h3`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.1rem;
  `;

  return (
    // Responsibility: To change Location
    <Container>
      <City>Lagos</City>
      <Country>NG</Country>
    </Container>
  );
};

export default Location;
