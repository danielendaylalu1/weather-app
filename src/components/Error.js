import React from "react";
import img from "../images/location.png";
import eye from "../images/open-eye.png";
import drop from "../images/drop.png";
import wind from "../images/wind.png";
import error from "../images/warning.png";

function Error({ weekday, month, date, err }) {
  return (
    <div className="container">
      <div className="top">
        <img src={img} alt="location" className="location" />
        <h3 className="country">__</h3>
      </div>
      {err ? (
        <h1 className="city">{err.message}</h1>
      ) : (
        <h1 className="city">Failed to Fetch</h1>
      )}
      <h5 className="date">
        {weekday} - {date} - {month}
      </h5>
      <img src={error} alt="Weather icon" className="icon" />
      <p className="desc">__</p>
      <h1 className="temp">C&#xB0;</h1>
      <div className="summery">
        <h2>Daily Summery</h2>
        <p>
          Now it feels like __ &#xB0;, acctuly __&#xB0; ,
          <br />
          it feels there will be a __ ,
          <br /> Today the temprature is felt in the range from __&#xB0;, to
          __&#xB0;
        </p>
      </div>
      <div className="wind">
        <div>
          <img src={wind} alt="wind" />
          <h6>__km/hr</h6>
          <h6>Speed</h6>
        </div>
        <div>
          <img src={drop} alt="humidity" />
          <h6>__%</h6>
          <h6>humidity</h6>
        </div>
        <div>
          <img src={eye} alt="visibility" />
          <h6>__km</h6>
          <h6>visibility</h6>
        </div>
      </div>
    </div>
  );
}

export default Error;
