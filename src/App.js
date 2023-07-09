import React from "react";

import "./App.css";
import WeatherCard from "./components/weatherCard/weatherCard";

// A functional component (This component is prefered cause its more readable)
const App = () => {
  const data = async () => {
    const apiResponse = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=89b273a95685d5c09e406eaee964c126"
    );
    const resJSON = await apiResponse.json();
    return resJSON;
  };

  data().then((res) => console.log(res));

  return (
    <div className="App">
      <h1 className="header">Welcome to My Weather App</h1>
      <hr />
      <p className="info">
        Hello World! Welcome to my very first react app where I make a weather
        app
      </p>
      <WeatherCard city="Lagos" country="NG" temp={30} condition="Dust" />
      <WeatherCard city="London" country="CA" temp={10} condition="Clouds" />
      <WeatherCard city="Manchester" country="UK" temp={18} condition="Clear" />
    </div>
  );
};

export default App;
