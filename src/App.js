import React from "react";

import "./App.css";
import WeatherCard from "./components/weatherCard/weatherCard";

// A functional component (This component is prefered cause its more readable)
const App = () => {
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
