import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cw_event1 from "../assets/CW-Event1.png";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" h-full">
      <Slider {...settings} className=" h-full ">
        <div className="h-full">
          <img
            src={cw_event1}
            alt="Picture"
            className="border-2 border-green-600 object-cover h-[29rem] w-full"
          />
        </div>
        <div className="h-full">
          <img
            src={cw_event1}
            alt="Picture"
            className="border-2 border-green-600 object-cover h-[29rem] w-full"
          />
        </div>
        <div className="h-full">
          <img
            src={cw_event1}
            alt="Picture"
            className="border-2 border-green-600 object-cover h-[29rem] w-full"
          />
        </div>
        <div className="h-full">
          <img
            src={cw_event1}
            alt="Picture"
            className="border-2 border-green-600 object-cover h-[29rem] w-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
