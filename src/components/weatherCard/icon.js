import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;

  return (
    // Responsibility: Displays the appropriate icon
    <Icon className="icon" src="" alt="Weather Icon" />
  );
};

export default Icon;
