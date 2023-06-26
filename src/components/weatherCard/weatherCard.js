import React from "react";

import Location from "./location";

// changes the background color in the card for now
var cardColor = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--red");
document.documentElement.style.setProperty("--red", "100");

console.log(cardColor);

const WeatherCard = (props) => {
  return (
    // Responsibility: To display things and change background of the card based on a variable passed to it
    <div className="card">
      <Location />
      <img className="icon" src="" alt="Weather Icon" />
      <h1 className="temp">30°C</h1>
      <h3 className="condition">Sunny</h3>
    </div>
  );
};

export default WeatherCard;
