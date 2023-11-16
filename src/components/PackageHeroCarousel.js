import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cs_aikp from "../assets/CW-AIKP.png";
import cw_fvs from "../assets/CW-FVS.jpg";
import cw_as from "../assets/CW-AS.png";
import cw_hero from "../assets/CW-Hero.png";
import Button from "@mui/material/Button";

import promo from "../assets/packageBg.png";

const PackageHeroCarousel = ({ pic1, pic2, pic3 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* CAROUSEL */}
      {/* <Slider
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
      </Slider> */}

      {/* HOVER */}
      <div className="border-2 border-black lg:w-[60%] xl:w-[60%] 2xl:w-[45%]">
        <div className="border-2 border-green-600 h-[29rem] transition-opacity duration-500">
          {pic1 ? (
            <img src={cs_aikp} alt="" className="w-full h-full rounded-xl " />
          ) : pic2 ? (
            <img src={cw_fvs} alt="" className="w-full h-full rounded-xl " />
          ) : pic3 ? (
            <img src={cw_as} alt="" className="w-full h-full rounded-xl " />
          ) : (
            <img src={cw_hero} alt="" className="w-full h-full rounded-xl " />
          )}
        </div>
      </div>
    </>
  );
};

export default PackageHeroCarousel;
