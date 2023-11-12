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
    <div className="h-full">
      <Slider {...settings} className=" h-full border-2 border-blue-600">
        <div className="lg:h-[24rem] 2xl:h-[29rem]">
          <img
            src={cw_event1}
            alt="Picture"
            className="border-2 border-green-600 object-cover h-full w-full"
          />
        </div>
        <div className="lg:h-[24rem] 2xl:h-[29rem]">
          <img
            src={cw_event1}
            alt="Picture"
            className="border-2 border-green-600 object-cover h-full w-full"
          />
        </div>
        <div className="lg:h-[24rem] 2xl:h-[29rem]">
          <img
            src={cw_event1}
            alt="Picture"
            className="border-2 border-green-600 object-cover h-full w-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
