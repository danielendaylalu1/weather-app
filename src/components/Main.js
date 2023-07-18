import React from "react";
import img from "../images/location.png";
import eye from "../images/open-eye.png";
import drop from "../images/drop.png";
import wind from "../images/wind.png";

const Main = ({ weekday, month, date, data }) => {
  return (
    <div className="container">
      <div className="top">
        <img src={img} alt="location" className="location" />
        <h3 className="country">{data.city.country}</h3>
      </div>
      <h1 className="city">{data.city.name}</h1>
      <h5 className="date">
        {weekday} - {date} - {month}
      </h5>
      <img
        src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
        alt="Weather icon"
        className="icon"
      />
      <p className="desc">{data.list[0].weather[0].description}</p>
      <h1 className="temp">
        {Math.round(data.list[0].main.temp - 273.15)}&#xB0;
      </h1>
      <div className="summery">
        <h2>Daily Summery</h2>
        <p>
          Now it feels like {(data.list[0].main.feels_like - 273.15).toFixed(2)}
          &#xB0;, acctuly {(data.list[0].main.temp - 273.15).toFixed(2)}&#xB0; ,
          <br />
          it feels there will be a {data.list[0].weather[0].description} ,
          <br /> Today the temprature is felt in the range from{" "}
          {(data.list[0].main.temp_max - 273.15).toFixed(2)}&#xB0;, to{" "}
          {(data.list[0].main.temp_min - 273.15).toFixed(2)}&#xB0;
        </p>
      </div>
      <div className="wind">
        <div>
          <img src={wind} alt="wind" />
          <h6>{data.list[0].wind.speed}km/hr</h6>
          <h6>Speed</h6>
        </div>
        <div>
          <img src={drop} alt="humidity" />
          <h6>{data.list[0].main.humidity}%</h6>
          <h6>humidity</h6>
        </div>
        <div>
          <img src={eye} alt="visibility" />
          <h6>{(data.list[0].visibility / 1000).toFixed(2)}km</h6>
          <h6>visibility</h6>
        </div>
      </div>
    </div>
  );
};

export default Main;
