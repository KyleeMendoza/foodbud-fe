import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cw_event1 from "../assets/CW-Event1.png";
import Button from "@mui/material/Button";
import promo from "../assets/packageBg.png";

import luxury from "../assets/luxury.png";
import diamond from "../assets/diamond.png";
import delux_debut from "../assets/delux_debut.png";
import delux_pack from "../assets/delux_pack.png";
import budget_pack from "../assets/Packages/barbie bg.jpg";

const PackageCarousel = () => {
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
        className=" h-full w-full border-black rounded-2xl pr-5"
      >
        <div className="">
          <div className="flex items-center h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-heading36 font-bold text-secondary500">
                  All-In Packages
                </p>
                <p className="text-heading14 font-bold capitalize text-primary500">
                  Customize your own package
                </p>
                <p className="text-title24">
                  Unleash the celebration without breaking the bank!
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <button className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-title13 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200">
                    Get a quote
                  </button>
                  <button className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-title13 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200">
                    See photos
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-1 h-full">
              <div>
                <img src={budget_pack} alt="" className="h-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-heading36 font-bold text-secondary500">
                  All-In Packages
                </p>
                <p className="text-heading14 font-bold capitalize text-primary500">
                  deluxe package
                </p>
                <p className="text-title24">
                  Unleash the celebration without breaking the bank!
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    get a quote
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    see photos
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-1  h-full">
              <div>
                <img src={delux_pack} alt="" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-heading36 font-bold text-secondary500">
                  All-In Packages
                </p>
                <p className="text-heading14 font-bold capitalize text-primary500">
                  deluxe debut
                </p>
                <p className="text-title24">
                  Unleash the celebration without breaking the bank!
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    get a quote
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    see photos
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-1  h-full">
              <div>
                <img src={delux_debut} alt="" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-heading36 font-bold text-secondary500">
                  All-In Packages
                </p>
                <p className="text-[2.4rem] font-bold capitalize text-primary500">
                  diamond package
                </p>
                <p className="text-title24">
                  Unleash the celebration without breaking the bank!
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    get a quote
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    see photos
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-1  h-full">
              <div>
                <img src={diamond} alt="" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-heading36 font-bold text-secondary500">
                  All-In Packages
                </p>
                <p className="text-heading14 font-bold capitalize text-primary500">
                  luxury package
                </p>
                <p className="text-title24">
                  Unleash the celebration without breaking the bank!
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    get a quote
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    see photos
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-1  h-full">
              <div>
                <img src={luxury} alt="" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="lg:h-[24.5rem] xl:h-[25.3rem] min-[1528px]:h-[25.3rem] 2xl:h-[24.2rem] ">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-heading36 font-bold">All-In Packages</p>
                <p className="text-heading14 font-bold capitalize">
                  Deluxe Debut Package
                </p>
                <p className="text-title24">
                  Step into the spotlight with a debut that dazzles
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    get a quote
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    see photos
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1  h-full">
              <div>
                <img src={promo} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[24.5rem] xl:h-[25.3rem] min-[1528px]:h-[25.3rem] 2xl:h-[24.2rem] ">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-heading36 font-bold">All-In Packages</p>
                <p className="text-heading14 font-bold capitalize">Deluxe Package</p>
                <p className="text-title24">
                  Elevate your event with opulence that speaks volumes!
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    get a quote
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    see photos
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1  h-full">
              <div>
                <img src={promo} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[24.5rem] xl:h-[25.3rem] min-[1528px]:h-[25.3rem] 2xl:h-[24.2rem] ">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-heading36 font-bold">All-In Packages</p>
                <p className="text-heading14 font-bold capitalize">Diamond Package</p>
                <p className="text-title24">
                  Crafting unforgettable moments, one exquisite detail at a time
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    get a quote
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    see photos
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1  h-full">
              <div>
                <img src={promo} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[24.5rem] xl:h-[25.3rem] min-[1528px]:h-[25.3rem] 2xl:h-[24.2rem] ">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-heading36 font-bold">All-In Packages</p>
                <p className="text-heading14 font-bold capitalize">Luxury Package</p>
                <p className="text-title24">
                  Indulge in a world where luxury meets celebration
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    get a quote
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    see photos
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1  h-full">
              <div>
                <img src={promo} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </div> */}
      </Slider>
    </>
  );
};

export default PackageCarousel;
