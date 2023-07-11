import React from "react";
import styled from "@emotion/styled";

import Location from "./location";
import Icon from "./icon";
import WeatherCondition from "./weatherCondition";

// changes the background color in the card

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  // let temp = temp;
  let highColor = 0;
  let lowColor = 0;
  let highNum = null;
  let lowNum = null;

  if (temp > 12) {
    //Logic for hot weather
    highNum = 255;
    lowNum = 0;

    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 200;
  } else if (temp <= 12) {
    //Logic for cold weather
    highNum = 0;
    lowNum = 255;

    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 200;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(
      to top,
      rgb(${highNum}, ${highColor}, ${lowNum}),
      rgb(${highNum}, ${Math.abs(lowColor)}, ${lowNum})
    );
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border-radius: 15px;
  `;

  return (
    // Responsibility: To display things and change the background of the card based on a variable passed to it
    <Card>
      <Location getWeather={getWeather} city={city} country={country} />
      <Icon condition={condition} />
      <WeatherCondition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
