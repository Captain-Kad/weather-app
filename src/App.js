import React from "react";

import "./App.css";
import WeatherCard from "./components/weatherCard/weatherCard";

// A functional component (This component is prefered cause its more readable)
const App = () => {
  const data = async () => {
    const api_key = process.env.REACT_APP_NEW_WEATHER_API_KEY;
    const apiResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${api_key}`
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
