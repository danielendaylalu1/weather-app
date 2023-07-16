import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("london");
  const API_KEY = process.env.REACT_APP_MY_API_KEY;

  useEffect(() => {
    const weatherGeter = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
        );
        const weatherData = await res.json();
        setData(weatherData);
        console.log(weatherData);
      } catch (err) {
        throw new Error("error while fetching");
      }
    };
    weatherGeter();
  }, [city, API_KEY]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Heloo</h1>
        <form
          onSubmit={(e) => {
            console.log(API_KEY);
            e.preventDefault();
            const newCity = e.target.city.value;
            setCity(newCity);
            data.weather && console.log(data.weather[0].icon);
          }}
        >
          <input type="text" name="city" />
          <button type="submit">submit</button>
        </form>
        {/* {data.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        )} */}
        <p></p>
      </header>
    </div>
  );
}

export default App;
