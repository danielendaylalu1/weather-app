import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WeekCard from "./WeekCard";

const WeekWeather = ({ data, date }) => {
  const [filterd, setFilterd] = useState([]);
  let num = 0;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

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
    <>
      <Slider {...settings} className="week-weather">
        {filterd.length > 0 &&
          filterd.map((obj) => {
            if (obj.date !== num) {
              num = obj.date;
              return <WeekCard obj={obj} />;
            }
          })}
      </Slider>
    </>
  );
};

export default WeekWeather;
