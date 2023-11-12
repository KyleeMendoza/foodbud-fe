import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cs_aikp from "../assets/CW-AIKP.png";
import cw_fvs from "../assets/CW-FVS.jpg";
import cw_as from "../assets/CW-AS.png";
import cw_event1 from "../assets/CW-Event1.png";
import Button from "@mui/material/Button";

import promo from "../assets/packageBg.png";

const PackageHeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider
        {...settings}
        className="border-2 border-black lg:w-[70%] xl:w-[60%] 2xl:w-[45%]"
      >
        <div className="border-2 border-green-600 h-[29rem]">
          <img src={cs_aikp} alt="" className="w-full h-full rounded-xl " />
        </div>
        <div className="border-2 border-green-600 h-[29rem]">
          <img src={cw_fvs} alt="" className="w-full h-full rounded-xl " />
        </div>
        <div className="border-2 border-green-600 h-[29rem]">
          <img src={cw_as} alt="" className="w-full h-full rounded-xl " />
        </div>
      </Slider>
    </>
  );
};

export default PackageHeroCarousel;
