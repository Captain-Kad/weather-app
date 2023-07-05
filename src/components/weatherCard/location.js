import React from "react";
import styled from "@emotion/styled";

const Location = (props) => {
  const Container = styled.div`
    text-align: center;
  `;

  return (
    // Responsibility: To change Location
    <Container>
      <h1 className="city">Lagos</h1>
      <h3 className="country">NG</h3>
    </Container>
  );
};

export default Location;
