import React, { useState, useEffect } from "react";

import WeatherCard from "./weatherCard/weatherCard";

const WeatherEngine = ({ location }) => {
  // hooks
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temp: null,
    condition: null,
  });

  //   function to get the data from the open weather api
  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const api_key = process.env.REACT_APP_NEW_WEATHER_API_KEY;
      const apiResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=${api_key}`
      );
      const resJSON = await apiResponse.json(); //Weather data in JSON format
      setWeather({
        city: resJSON.name,
        country: resJSON.sys.country,
        temp: resJSON.main.temp,
        condition: resJSON.weather[0].main,
      });
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  //   function to handle search queries gotten from the user
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  // Preloaded values so the card isn't empty
  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      <h1 className="header">Welcome to My Weather App</h1>
      <hr />
      <p className="info">
        Hello World! Welcome to my very first react app where I make a weather
        app
      </p>
      {!loading && !error ? (
        <div>
          <WeatherCard
            city={weather.city}
            country={weather.country}
            temp={weather.temp}
            condition={weather.condition}
            getWeather={getWeather}
          />
        </div>
      ) : loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : !loading && error ? (
        <div style={{ color: "black" }}>
          There is an error! <br />
          <button onClick={() => setError(false)}>Reset!</button>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default WeatherEngine;
