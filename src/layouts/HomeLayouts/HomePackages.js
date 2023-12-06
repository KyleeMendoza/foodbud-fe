import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import cw_ebox1 from "../../assets/CW-Ebox1.png";
import cw_ebox2 from "../../assets/CW-Ebox2.png";
import cw_ebox3 from "../../assets/CW-Ebox3.png";
import cw_ebox4 from "../../assets/CW-Ebox4.png";
import Carousel from "../../components/Carousel";

function HomePackages() {
  return (
    <div className="h-full">
      <div className="flex flex-col py-10 gap-10 text-center items-center">
        <p className="w-[95%] lg:w-full text-xl lg:text-xl capitalize font-['Poppins'] text-sky-400 font-semibold">
          Crafting unforgettable moments, one moment at a time.
        </p>
        <div className="w-[104%] lg:w-[70%] lg:h-[25rem] 2xl:h-[30rem]">
          <Carousel />
        </div>
        <div className="w-full py-10 overflow-x-auto lg:flex lg:justify-center lg:items-center">
          <div className="flex w-[200%] lg:w-3/4 overflow-x-auto justify-center gap-10 items-center lg:h-[16rem] xl:h-[18rem] 2xl:h-[23rem]">
            <div className="h-[14rem] w-[14rem] lg:w-1/5 lg:h-[90%] my-5 lg:my-0 text-center rounded-xl drop-shadow-lg bg-white hover:-translate-y-5 ease-in-out duration-500">
              <Link to="/gallery">
                {/* <img
                  src={cw_ebox1}
                  alt=""
                  className="w-full h-[80%] rounded-t-xl"
                /> */}
                <div
                  className="w-full h-[80%] bg-cover bg-center bg-no-repeat rounded-t-xl"
                  style={{ backgroundImage: `url(${cw_ebox1})` }}
                ></div>
                <p className="text-lg capitalize font-heading my-5 text-sky-400 font-semibold">
                  Baptismal
                </p>
              </Link>
            </div>
            <div className="h-[14rem] w-[14rem] lg:w-1/5 lg:h-[90%] my-5 lg:my-0 text-center rounded-xl drop-shadow-lg bg-white hover:-translate-y-5 ease-in-out duration-500">
              <Link to="/gallery">
                {/* <img
                  src={cw_ebox2}
                  alt=""
                  className="w-full h-[80%] rounded-t-xl"
                /> */}
                <div
                  className="w-full h-[80%] bg-cover bg-center bg-no-repeat rounded-t-xl"
                  style={{ backgroundImage: `url(${cw_ebox2})` }}
                ></div>
                <p className="text-lg capitalize font-heading my-5 text-sky-400 font-semibold">
                  Kid's Party
                </p>
              </Link>
            </div>
            <div className="h-[14rem] w-[14rem] lg:w-1/5 lg:h-[90%] my-5 lg:my-0 text-center rounded-xl drop-shadow-lg bg-white hover:-translate-y-5 ease-in-out duration-500">
              <Link to="/gallery">
                {/* <img
                  src={cw_ebox3}
                  alt=""
                  className="w-full h-[80%] rounded-t-xl"
                /> */}
                <div
                  className="w-full h-[80%] bg-cover bg-center bg-no-repeat rounded-t-xl"
                  style={{ backgroundImage: `url(${cw_ebox3})` }}
                ></div>
                <p className="text-lg capitalize font-heading my-5 text-sky-400 font-semibold">
                  Adult's Party
                </p>
              </Link>
            </div>
            <div className="h-[14rem] w-[14rem] lg:w-1/5 lg:h-[90%] my-5 lg:my-0 text-center rounded-xl drop-shadow-lg bg-white hover:-translate-y-5 ease-in-out duration-500">
              <Link to="/gallery">
                {/* <img
                  src={cw_ebox4}
                  alt=""
                  className="w-full h-[80%] rounded-t-xl"
                /> */}
                <div
                  className="w-full h-[80%] bg-cover bg-center bg-no-repeat rounded-t-xl"
                  style={{ backgroundImage: `url(${cw_ebox4})` }}
                ></div>
                <p className="text-lg capitalize font-heading my-5 text-sky-400 font-semibold">
                  Corporate
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Link to="https://www.messenger.com/t/103596451974308/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0">
          <button
            variant="contained"
            className="bg-primary300 hover:bg-primary400 text-white text-md lg:text-heading25 font-semibold font-heading capitalize py-4 px-10 rounded-lg"
          >
            start planning your event!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePackages;
