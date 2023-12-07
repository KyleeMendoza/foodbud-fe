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
import budget_pack from "../assets/budget_pack.png";

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
        className=" h-full w-full border-2 border-black rounded-2xl pr-5"
      >
        <div className="">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-2xl font-bold text-sky-600">All-In Packages</p>
                <p className="text-5xl font-bold capitalize text-[#e91e63]">budget package</p>
                <p className="text-lg">
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
            <div className="flex flex-1 h-full">
              <div>
                <img src={budget_pack} alt="" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-2xl font-bold text-sky-600">All-In Packages</p>
                <p className="text-5xl font-bold capitalize text-[#e91e63]">deluxe package</p>
                <p className="text-lg">
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
            <div className="flex flex-1  h-full">
              <div>
                <img src={delux_pack} alt="" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-2xl font-bold text-sky-600">All-In Packages</p>
                <p className="text-5xl font-bold capitalize text-[#e91e63]">deluxe debut</p>
                <p className="text-lg">
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
            <div className="flex flex-1  h-full">
              <div>
                <img src={delux_debut} alt="" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-2xl font-bold text-sky-600">All-In Packages</p>
                <p className="text-[2.4rem] font-bold capitalize text-[#e91e63]">
                  diamond package
                </p>
                <p className="text-lg">
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
            <div className="flex flex-1  h-full">
              <div>
                <img src={diamond} alt="" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-2xl font-bold text-sky-600">All-In Packages</p>
                <p className="text-5xl font-bold capitalize text-[#e91e63]">luxury package</p>
                <p className="text-lg">
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
            <div className="flex flex-1  h-full">
              <div>
                <img src={luxury} alt="" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="lg:h-[24.5rem] xl:h-[25.3rem] min-[1528px]:h-[25.3rem] 2xl:h-[24.2rem] ">
          <div className="flex  items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-2xl font-bold">All-In Packages</p>
                <p className="text-5xl font-bold capitalize">
                  Deluxe Debut Package
                </p>
                <p className="text-lg">
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
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-2xl font-bold">All-In Packages</p>
                <p className="text-5xl font-bold capitalize">Deluxe Package</p>
                <p className="text-lg">
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
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-2xl font-bold">All-In Packages</p>
                <p className="text-5xl font-bold capitalize">Diamond Package</p>
                <p className="text-lg">
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
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 ">
              <div className="flex flex-col gap-8 ">
                <p className="text-2xl font-bold">All-In Packages</p>
                <p className="text-5xl font-bold capitalize">Luxury Package</p>
                <p className="text-lg">
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
