import React from "react";

import Location from "./location";
import Icon from "./icon";
import WeatherCondition from "./weatherCondition";

// changes the background color in the card
// gets the root element from the css file which provides access to the variables created in the css file
const root = document.querySelector(":root");

const WeatherCard = (props) => {
  //Declaration and defining of variables
  let temp = props.temp;
  root.style.setProperty("--temp", temp);

  let highColor = 0;
  root.style.setProperty("--highColor", highColor);

  let lowColor = 0;
  root.style.setProperty("--lowColor", lowColor);

  let highNum = null;
  root.style.setProperty("--highNum", highNum);

  let lowNum = null;
  root.style.setProperty("--lowNum", lowNum);

  if (props.temp > 12) {
    //Logic for hot weather
    highNum = 255;
    root.style.setProperty("--highNum", highNum);

    lowNum = 0;
    root.style.setProperty("--lowNum", lowNum);

    highColor = (1 - (temp - 12) / 28) * 255;
    root.style.setProperty("--highColor", highColor);

    lowColor = highColor - 150;
    root.style.setProperty("--lowColor", lowColor);
  } else if (props.temp <= 12) {
    //Logic for cold weather
    highNum = 0;
    root.style.setProperty("--highNum", highNum);

    lowNum = 255;
    root.style.setProperty("--lowNum", lowNum);

    highColor = (1 - (temp + 20) / 32) * 255;
    root.style.setProperty("--highColor", highColor);

    lowColor = highColor - 150;
    root.style.setProperty("--lowColor", lowColor);
  }

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
