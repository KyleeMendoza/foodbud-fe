import React, { useState } from "react";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import cs_aikp from "../../assets/CW-AIKP.png";
import cw_fvs from "../../assets/CW-FVS.jpg";
import cw_as from "../../assets/CW-AS.png";

import promo from "../../assets/packageBg.png";
import PackageHeroCarousel from "../../components/PackageHeroCarousel";

function PackagesHero() {
  const [pic1, setPic1] = useState(false);
  const [pic2, setPic2] = useState(false);
  const [pic3, setPic3] = useState(false);
  return (
    <div className=" h-full ">
      <div className="flex flex-col gap-10 h-full py-10 ">
        <div className="flex flex-col gap-10 items-center justify-center ">
          <div className="flex flex-col lg:w-[70%] xl:w-[60%] 2xl:w-[55%] text-center gap-10 justify-center items-center font-['Poppins'] ">
            <p className="text-3xl font-bold capitalize text-sky-600">our packages</p>
            <p className="xl:text-6xl lg:text-5xl font-bold capitalize leading-normal text-[#e91e63]">
              Celebrate in Style with Our Range of Event Packages
            </p>
            <p>
              Take a moment to explore our diverse range of event packages. From
              intimate gatherings to grand affairs, we have something for
              everyone.
            </p>
          </div>
          <div>
            <div className="flex gap-10 justify-center items-center ">
              <Button
                variant="contained"
                size="large"
                style={{ backgroundColor: "#0249FF" }}
                onMouseEnter={() => setPic1(true)}
                onMouseLeave={() => setPic1(false)}
              >
                All-In Packages
              </Button>
              <Button
                variant="outlined"
                size="large"
                style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                onMouseEnter={() => setPic2(true)}
                onMouseLeave={() => setPic2(false)}
              >
                Full Venue Styling
              </Button>
              <Button
                variant="outlined"
                size="large"
                style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                onMouseEnter={() => setPic3(true)}
                onMouseLeave={() => setPic3(false)}
              >
                Additional Services
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center ">
          <PackageHeroCarousel pic1={pic1} pic2={pic2} pic3={pic3} />
        </div>
      </div>
    </div>
  );
}

export default PackagesHero;
