import React from "react";
import eye from "../images/open-eye.png";
import drop from "../images/drop.png";
import wind from "../images/wind.png";

function Wind({ data }) {
  return (
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
  );
}

export default Wind;
