import React from "react";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import cs_aikp from "../../assets/CW-AIKP.png";
import cw_fvs from "../../assets/CW-FVS.jpg";
import cw_as from "../../assets/CW-AS.png";

import promo from "../../assets/packageBg.png";
import PackageHeroCarousel from "../../components/PackageHeroCarousel";

function PackagesHero() {
  return (
    <div className="border-2 border-black h-full">
      <div className="flex flex-col gap-10 h-full py-10 border-2 border-green-600 ">
        <div className="flex flex-col gap-10 items-center justify-center border-2 border-red-600">
          <div className="flex flex-col lg:w-[70%] xl:w-[60%] 2xl:w-[55%] text-center gap-10 justify-center items-center font-['Poppins'] border-2 border-blue-600">
            <p className="text-3xl font-bold capitalize">our packages</p>
            <p className="xl:text-6xl lg:text-5xl font-bold capitalize leading-normal">
              Celebrate in Style with Our Range of Event Packages
            </p>
            <p>
              Take a moment to explore our diverse range of event packages. From
              intimate gatherings to grand affairs, we have something for
              everyone.
            </p>
          </div>
          <div>
            <div className="flex gap-10 justify-center items-center border-2 border-red-600">
              <Button
                variant="contained"
                size="large"
                style={{ backgroundColor: "#0249FF" }}
              >
                All-In Packages
              </Button>
              <Button
                variant="outlined"
                size="large"
                style={{ color: "#0249FF", border: "2px solid #0249FF" }}
              >
                Full Venue Styling
              </Button>
              <Button
                variant="outlined"
                size="large"
                style={{ color: "#0249FF", border: "2px solid #0249FF" }}
              >
                Additional Services
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center border-2 border-red-600">
          <PackageHeroCarousel />
        </div>
      </div>
    </div>
  );
}

export default PackagesHero;
