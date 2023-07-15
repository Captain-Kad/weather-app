import React from "react";

import "./App.css";
import WeatherEngine from "./components/weatherEngine";
import AppTitle from "./components/weatherCard/appTitle";
import AppInfo from "./components/weatherCard/appInfo";

// A functional component (This component is prefered cause its more readable)
const App = () => {
  return (
    <div className="App">
      <AppTitle />
      <AppInfo />
      <WeatherEngine location={"lagos, ng"} />
    </div>
  );
};

export default App;
