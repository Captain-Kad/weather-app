import React from "react";
import styled from "@emotion/styled";

import Clouds from "../../img/Mostly Cloudy-2x.png";
import Clear from "../../img/Mostly Sunny-2x.png";
import Haze from "../../img/Haze-2x.png";
import Hail from "../../img/Hail-2x.png";
import Fog from "../../img/Fog-2x.png";
import Tornado from "../../img/Tornado-2x.png";
import Dust from "../../img/Dust-2x.png";
import Mist from "../../img/Fog-2x.png";
import Snow from "../../img/Snow-2x.png";
import Rain from "../../img/Rain-2x.png";
import Drizzle from "../../img/Drizzle-2x.png";
import Thunderstorm from "../../img/Severe Thunderstorm-2x.png";
import defaultPic from "../../img/Fog-2x.png";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;

  var icon = "";
  switch (props.condition) {
    case "Clouds":
      icon = Clouds;
      break;
    case "Clear":
      icon = Clear;
      break;
    case "Haze":
      icon = Haze;
      break;
    case "Hail":
      icon = Hail;
      break;
    case "Fog":
      icon = Fog;
      break;
    case "Tornado":
      icon = Tornado;
      break;
    case "Dust":
      icon = Dust;
      break;
    case "Mist":
      icon = Mist;
      break;
    case "Snow":
      icon = Snow;
      break;
    case "Rain":
      icon = Rain;
      break;
    case "Drizzle":
      icon = Drizzle;
      break;
    case "Thunderstorm":
      icon = Thunderstorm;
      break;
    default:
      icon = defaultPic;
      break;
  }

  return (
    // Responsibility: Displays the appropriate icon
    <Icon src={icon} alt="Weather Icon"/>
  );
};

export default Icon;
