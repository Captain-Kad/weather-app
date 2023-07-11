import React from "react";
import styled from "@emotion/styled";

const WeatherCondition = ({ temp, condition }) => {
  return (
    // Responsibility: Handles the changing of the weather condition
    <div className="weather-condition">
      <Temp>{temp}°C</Temp>
      <Condition>{condition}</Condition>
    </div>
  );
};

export default WeatherCondition;

const Temp = styled.h1`
  font-family: "Fira Sans", sans-serif;
  font-size: 2rem;
  font-weight: 200;
`;

const Condition = styled.h3`
  font-family: "Merriweather", sans-serif;
  font-size: 1.2rem;
`;
