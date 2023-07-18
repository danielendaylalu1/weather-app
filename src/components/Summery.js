import React from "react";

function Summery({ data }) {
  return (
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
  );
}

export default Summery;
