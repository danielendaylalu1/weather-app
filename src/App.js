import { useState, useEffect } from "react";
import img from "./location.png";

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("london");
  const [err, setErr] = useState(false);
  const now = new Date();
  const date = now.getDate();
  const month = now.toLocaleString("en-US", { month: "long" });
  const weekday = now.toLocaleString("en-US", { weekday: "long" });
  const API_KEY = process.env.REACT_APP_MY_API_KEY;

  useEffect(() => {
    const weatherGeter = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        if (res.status === 404) {
          setErr(true);
        }
        const weatherData = await res.json();
        setData(weatherData);
        console.log(weatherData);
      } catch (err) {
        setErr(true);
        console.log(err);
      }
    };

    weatherGeter();
  }, [city, API_KEY]);
  return (
    <div className="App">
      <div className="main">
        <h1 className="header">
          FORCAST <span> weather</span>
        </h1>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const newCity = e.target.city.value.trim().toLowerCase();
            setCity(newCity);
            console.log(err);
          }}
        >
          <input type="text" name="city" />
          <button type="submit">Find</button>
        </form>
        {!err ? (
          data.weather && (
            <div className="container">
              <div className="top">
                <img src={img} alt="location" className="location" />
                <h3 className="country">{data.sys.country}</h3>
              </div>
              <h1 className="city">{data.name}</h1>
              <h5 className="date">
                {weekday} - {date} - {month}
              </h5>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="Weather icon"
                className="icon"
              />
              <p className="desc">{data.weather[0].description}</p>
              <h1 className="temp">
                {Math.round(data.main.temp - 273.15)}&#xB0;
              </h1>
              <div className="summery">
                <h2>Daily Summery</h2>
                <p>
                  Now it feels like {(data.main.feels_like - 273.15).toFixed(2)}
                  &#xB0;, acctuly{(data.main.temp - 273.15).toFixed(2)}&#xB0; ,
                  <br />
                  its feels there will be a {data.weather[0].description} ,
                  <br /> Today the temprature is felt in the range from{" "}
                  {(data.main.temp_max - 273.15).toFixed(2)}&#xB0;, to{" "}
                  {(data.main.temp_min - 273.15).toFixed(2)}&#xB0;
                </p>
              </div>
            </div>
          )
        ) : (
          <div className="container">
            <p className="err-text">Failed to fetch</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
