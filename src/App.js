import React, { useState, useEffect } from "react";

import "./App.css";
import WeatherCard from "./components/weatherCard/weatherCard";

// A functional component (This component is prefered cause its more readable)
const App = () => {
  // hooks
  const [query, setQuery] = useState("Lagos, ng");
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temp: null,
    condition: null,
  });

  const data = async (q) => {
    const api_key = process.env.REACT_APP_NEW_WEATHER_API_KEY;
    const apiResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=${api_key}`
    );
    const resJSON = await apiResponse.json();
    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      setWeather({
        city: res.name,
        country: res.sys.country,
        temp: res.main.temp,
        condition: res.weather[0].main,
      });
    });
  };

  // Preloaded values so the card isn't empty
  useEffect(() => {
    data(query).then((res) => {
      setWeather({
        city: res.name,
        country: res.sys.country,
        temp: res.main.temp,
        condition: res.weather[0].main,
      });
    });
  });

  return (
    <div className="App">
      <h1 className="header">Welcome to My Weather App</h1>
      <hr />
      <p className="info">
        Hello World! Welcome to my very first react app where I make a weather
        app
      </p>
      <WeatherCard
        city={weather.city}
        country={weather.country}
        temp={weather.temp}
        condition={weather.condition}
      />
      <WeatherCard city="London" country="CA" temp={10} condition="Clouds" />
      <WeatherCard city="Manchester" country="UK" temp={18} condition="Clear" />
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};

export default App;
