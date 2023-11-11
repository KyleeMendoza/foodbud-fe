import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cw_event1 from "../assets/CW-Event1.png";
import Button from "@mui/material/Button";

import promo from "../assets/packageBg.png";

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
      <Slider {...settings} className=" h-full ">
        <div className="h-[32rem] ">
          <div className="flex  items-center border-2 border-green-600 h-full">
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 border-2 border-red-600">
              <div className="flex flex-col gap-8 border-2 border-black">
                <p className="text-2xl font-bold">All-In Packages</p>
                <p className="text-5xl font-bold">Our Packages</p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, harum perspiciatis neque quisquam tenetur accusantium
                  magni alias autem ut porro!
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    Know more
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    Get a quote
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 border-2 border-red-600 h-full">
              <div>
                <img src={promo} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[32rem]">
          <div className="flex  items-center border-2 border-green-600 h-full">
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 border-2 border-red-600">
              <div className="flex flex-col gap-8 border-2 border-black">
                <p className="text-2xl font-bold">All-In Packages</p>
                <p className="text-5xl font-bold">Our Packages</p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, harum perspiciatis neque quisquam tenetur accusantium
                  magni alias autem ut porro!
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    Know more
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    Get a quote
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 border-2 border-red-600 h-full">
              <div>
                <img src={promo} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[32rem]">
          <div className="flex  items-center border-2 border-green-600 h-full">
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 border-2 border-red-600">
              <div className="flex flex-col gap-8 border-2 border-black">
                <p className="text-2xl font-bold">All-In Packages</p>
                <p className="text-5xl font-bold">Our Packages</p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, harum perspiciatis neque quisquam tenetur accusantium
                  magni alias autem ut porro!
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                  >
                    Know more
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#0249FF" }}
                  >
                    Get a quote
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 border-2 border-red-600 h-full">
              <div>
                <img src={promo} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default PackageCarousel;
