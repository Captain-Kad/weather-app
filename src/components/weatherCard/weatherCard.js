import React from "react";

import Location from "./location";
import Icon from "./icon";
import WeatherCondition from "./weatherCondition";

// changes the background color in the card
// gets the root element from the css file which provides access to the variables created in the css file
const root = document.querySelector(":root");

const WeatherCard = (props) => {
  // changes temp
  let temp = props.temp;
  root.style.setProperty("--temp", temp);

  let highColor = (1 - (temp - 12) / 28) * 255;
  root.style.setProperty("--highColor", highColor);

  let lowColor = highColor - 150;
  root.style.setProperty("--lowColor", lowColor);

  return (
    // Responsibility: To display things and change the background of the card based on a variable passed to it
    <div className="card">
      <Location />
      <Icon />
      <WeatherCondition />
    </div>
  );
};

export default WeatherCard;
