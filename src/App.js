import React from "react";

import "./App.css";
import WeatherEngine from "./components/weatherEngine";

// A functional component (This component is prefered cause its more readable)
const App = () => {
  return (
    <div className="App">
      <h1 className="header">Weather App</h1>
      <hr />
      <p className="info">
        Hello World! Welcome to my very first react app where I make a weather
        app
      </p>
      <WeatherEngine location={"lagos, ng"} />
    </div>
  );
};

export default App;
