import React, { useEffect, useState } from "react";

const WeekWeather = ({ data, date }) => {
  const [filterd, setFilterd] = useState([]);
  let num = 0;
  // const [first, setFirst] = useState(true);
  useEffect(() => {
    setFilterd([]);
    data.map((obj) => {
      if (new Date(obj.dt_txt).getDate() > date) {
        setFilterd((prvVal) => {
          return [...prvVal, { ...obj, date: new Date(obj.dt_txt).getDate() }];
        });
      }
    });
  }, [data, date]);
  return (
    <div className="week-weather">
      {/* {console.log(filterd)} */}
      {filterd.length > 0 &&
        filterd.map((obj) => {
          if (obj.date !== num) {
            num = obj.date;
            return (
              <div className="week-card" key={obj.date}>
                <h1 className="temp">
                  {Math.round(obj.main.temp - 273.15)}&#xB0;
                </h1>
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
        })}
    </div>
  );
};

export default WeekWeather;
