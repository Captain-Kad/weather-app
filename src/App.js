import React from "react";

import "./App.css";
import WeatherCard from "./weatherCard";

// A functional component (This component is prefered cause its more readable)
const Intro = () => {
  return (
    <div className="App">
      <h1 className="header">Welcome to My Weather App</h1>
      <hr />
      <p className="info">
        Hello World! Welcome to my very first react app where I make a weather
        app
      </p>
    </div>
  );
};

const Final = () => {
  return (
    <div className="main-section">
      <Intro />
      <WeatherCard />
      <br />
      <h2>List of Countries:</h2>
      <ul>
        <li>Nigeria</li>
        <li>Canada</li>
        <li>USA</li>
        <li>Canada</li>
      </ul>
    </div>
  );
};

export default Final;

// function Intro() {
//   return (
//     <div className="App">
//       <h1 className="header">Welcome to React</h1>
//       <p className="info">Hello World! Welcome to my very first React App</p>
//     </div>
//   );
// };

// function Final() {
//   return (
//     <div className="main-section">
//       <Intro />
//       <h2>Fruits:</h2>
//       <ul>
//         <li>Apples</li>
//         <li>Blueberries</li>
//         <li>Strawberries</li>
//         <li>Bananas</li>
//       </ul>
//     </div>
//   );
// }
