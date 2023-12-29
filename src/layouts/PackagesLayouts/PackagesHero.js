import React, { useState } from "react";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import cs_aikp from "../../assets/CW-AIKP.png";
import cw_fvs from "../../assets/CW-FVS.jpg";
import cw_as from "../../assets/CW-AS.png";
import "../../css/packagehover.css";

import promo from "../../assets/packageBg.png";
import PackageHeroCarousel from "../../components/PackageHeroCarousel";
import { transform } from "framer-motion";

function PackagesHero() {
  const [aiphover, setAipHover] = useState(false);
  const [fvshover, setFvsHover] = useState(false);
  const [ashover, Hover] = useState(false);

  const [pic1, setPic1] = useState(false);
  const [pic2, setPic2] = useState(false);
  const [pic3, setPic3] = useState(false);

  return (
    <div className={`h-fit monitor:h-screen flex flex-col justify-center`}>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {/* Main Box Content */}
        <div className="flex flex-col border py-10 gap-6 w-full monitor:w-1/2">
          <div className="flex flex-col items-center justify-center w-full text-center gap-10 2xl:gap-20">
            {/* Container for opening message */}
            <div className="w-full flex flex-col gap-10">
              {/* Container for Our package tag */}
              <p className="text-title13 2xl:text-heading36 font-bold capitalize text-primary500">
                our packages
              </p>
              <p className=" text-[38px] 2xl:text-5xl font-bold capitalize leading-normal text-secondary500">
                Celebrate in Style with Our Range of Event Packages
              </p>
            </div>
          </div>
          {/* Container for Description */}
          <div className="text-center">
            <p className="w-fit 2xl:px-[101px] font-tbc font-medium text-title13 text-accent900">
              Take a moment to explore our diverse range of event packages. From
              intimate gatherings to grand affairs, we have something for
              everyone.
            </p>
          </div>
        </div>
        {/* Button Area */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center w-full pt-20">
          <a
            href="#allIn"
            className={`border-2 px-7 py-4 w-fit font-tbc font-semibold text-title13 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200 ${
              aiphover ? `transform scale-110` : ""
            }`}
            onMouseEnter={() => setAipHover(true)}
            onMouseLeave={() => setAipHover(false)}
          >
            All-In Packages
          </a>

          <a
            href="#fullVenue"
            className="border-2 px-7 py-4 w-fit font-tbc font-semibold text-title13 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200 hover:transform hover:scale-110"
          >
            Full Venue Styling
          </a>

          <a
            href="#additional"
            className="border-2 px-7 py-4 w-fit font-tbc font-semibold text-title13 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200 hover:transform hover:scale-110"
          >
            Additional Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default PackagesHero;
