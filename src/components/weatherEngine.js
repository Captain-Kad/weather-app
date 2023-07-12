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

  // Preloaded values so the card isn't empty
  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "black" }}>
        There is an error! <br />
        <button onClick={() => setError(false)}>Reset!</button>{" "}
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          color: "black",
          width: "200px",
          height: "240px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div>
      <WeatherCard
        city={weather.city}
        country={weather.country}
        temp={weather.temp}
        condition={weather.condition}
        getWeather={getWeather}
      />
    </div>
  );
};

export default WeatherEngine;
