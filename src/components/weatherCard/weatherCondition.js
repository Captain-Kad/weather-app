import React from "react";

const WeatherCondition = (props) => {
  return (
    // Responsibility: Handles the changing of the weather condition
    <div className="weather-condition">
      <h1 className="temp">30°C</h1>
      <h3 className="condition">Sunny</h3>
    </div>
  );
};

export default WeatherCondition;
