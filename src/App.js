import { useState, useEffect } from "react";

import Error from "./components/Error";
import Main from "./components/Main";
import Form from "./components/Form";
import Header from "./components/Header";
import WeekWeather from "./components/WeekWeather";

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("");
  const [err, setErr] = useState(false);
  const [isFirst, setFirst] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const now = new Date();
  const date = now.getDate();
  const month = now.toLocaleString("en-US", { month: "long" });
  const weekday = now.toLocaleString("en-US", { weekday: "long" });
  const API_KEY = process.env.REACT_APP_MY_API_KEY;

  useEffect(() => {
    const weatherGeter = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
        );
        const weatherData = await res.json();
        setData(weatherData);
        setIsLoading(false);
        setErr(false);
        if (weatherData.cod === "404") {
          setErr(true);
        }
      } catch (err) {
        setErr(true);
        console.log(err);
      }
    };
    if (!isFirst) {
      weatherGeter();
    }
    setFirst(true);
  }, [city, API_KEY]);
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Form setCity={setCity} setFirst={setFirst} />
        {isLoading && <h4 className="loading">Loading ....</h4>}
        {!err ? (
          data.city && (
            <>
              <Main weekday={weekday} month={month} date={date} data={data} />
              <WeekWeather data={data.list} date={date} />
            </>
          )
        ) : (
          <Error weekday={weekday} month={month} date={date} err={data} />
        )}
      </div>
    </div>
  );
}

export default App;
