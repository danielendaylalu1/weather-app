import React from "react";

function WeekCard({ obj }) {
  return (
    <div className="week-card" key={obj.date}>
      <h1 className="temp">{Math.round(obj.main.temp - 273.15)}&#xB0;</h1>
      <img
        src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
        alt="Weather icon"
        className="icon"
      />
      <h5 className="date">
        {new Date(obj.dt_txt).getDate()} -{" "}
        {new Date(obj.dt_txt).toLocaleString("en-US", {
          month: "long",
        })}
      </h5>
    </div>
  );
}

export default WeekCard;
