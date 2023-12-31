import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cw_event1 from "../assets/CW-Event1.png";
import package1 from "../assets/package1.png";
import package2 from "../assets/package2.png";
import package3 from "../assets/package3.png";
import package4 from "../assets/package4.png";
import package5 from "../assets/package5.png";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 10,
  };

  return (
    <div className="h-fit">
      <Slider {...settings} className=" h-fit">
        <div className="h-[15rem] monitor:h-[35rem] 2xl:h-[50rem]">
          <img
            src={package1}
            alt="Picture"
            className=" object-cover h-full w-full"
          />
        </div>
        <div className="h-[15rem] monitor:h-[35rem] 2xl:h-[50rem]">
          <img
            src={package2}
            alt="Picture"
            className=" object-cover h-full w-full"
          />
        </div>
        <div className="h-[15rem] monitor:h-[35rem] 2xl:h-[50rem]">
          <img
            src={package3}
            alt="Picture"
            className=" object-cover h-full w-full"
          />
        </div>
        <div className="h-[15rem] monitor:h-[35rem] 2xl:h-[50rem]">
          <img
            src={package4}
            alt="Picture"
            className=" object-cover h-full w-full"
          />
        </div>
        <div className="h-[15rem] monitor:h-[35rem] 2xl:h-[50rem]">
          <img
            src={package5}
            alt="Picture"
            className=" object-cover h-full w-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
