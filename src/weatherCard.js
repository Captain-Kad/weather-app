import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="card">
      <h1 className="city">Lagos</h1>
      <h3 className="country">NG</h3>
      <img className="icon" src="" alt="Weather Icon" />
      <h1 className="temp">30°C</h1>
      <h3 className="condition">Sunny</h3>
    </div>
  );
};

export default WeatherCard;

// A class component below: Include ", { Component }" in the imports right after the first react
// class Weather extends Component {
//     render() {
//         return (
//             <div>
//                 <br />
//                 <h1 className="class-component">Class Component</h1>
//                 <p className="class-component">Just showing an example of a Class Component</p>
//                 <br />
//             </div>
//         )
//     }
// }
