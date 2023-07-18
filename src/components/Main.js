import React from "react";
import img from "../images/location.png";
import Summery from "./Summery";
import Wind from "./Wind";

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
      <Summery data={data} />
      <Wind data={data} />
    </div>
  );
};

export default Main;
