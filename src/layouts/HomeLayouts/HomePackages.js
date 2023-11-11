import { Button } from "@mui/base";
import React from "react";
import cw_ebox1 from "../../assets/CW-Ebox1.png";
import cw_ebox2 from "../../assets/CW-Ebox2.png";
import cw_ebox3 from "../../assets/CW-Ebox3.png";
import cw_ebox4 from "../../assets/CW-Ebox4.png";
// import cw_event1 from "../../assets/CW-Event1.png";

import Carousel from "../../components/Carousel";

function HomePackages() {
  return (
    <div className="border-2 border-black h-full pt-10">
      <div className="border-2 border-green-600 flex flex-col gap-10 items-center">
        <p className="text-xl capitalize font-['Poppins']  text-sky-400 font-semibold">
          Crafting unforgettable moments, one bite at a time.
        </p>
        <div className="border-2 border-red-600 w-[70%] h-[25rem]">
          {/* <img
          src={cw_event1}
          alt="Picture"
          className=" border-2 border-green-600 object-cover h-[100%] w-[100%]"
        /> */}
          <Carousel />
        </div>
        <div className="flex justify-around px-4 items-center border-2 border-red-600 w-[85%] lg:h-[16rem] xl:h-[18rem]">
          <div className="border-red-600 border-2 w-[22%] h-full text-center rounded-xl drop-shadow-lg bg-white">
            <img
              src={cw_ebox1}
              alt=""
              className="w-full h-[80%] rounded-t-xl"
            />
            <p className="text-lg capitalize font-['Poppins'] my-2 text-sky-400 font-semibold">
              baptismal
            </p>
          </div>
          <div className="border-red-600 border-2 w-[22%] h-full text-center rounded-xl drop-shadow-lg bg-white">
            <img
              src={cw_ebox2}
              alt=""
              className="w-full h-[80%] rounded-t-xl"
            />
            <p className="text-lg capitalize font-['Poppins'] my-2 text-sky-400 font-semibold">
              baptismal
            </p>
          </div>
          <div className="border-red-600 border-2 w-[22%] h-full text-center rounded-xl drop-shadow-lg bg-white">
            <img
              src={cw_ebox3}
              alt=""
              className="w-full h-[80%] rounded-t-xl"
            />
            <p className="text-lg capitalize font-['Poppins'] my-2 text-sky-400 font-semibold">
              baptismal
            </p>
          </div>
          <div className="border-red-600 border-2 w-[22%] h-full text-center rounded-xl drop-shadow-lg bg-white">
            <img
              src={cw_ebox4}
              alt=""
              className="w-full h-[80%] rounded-t-xl"
            />
            <p className="text-lg capitalize font-['Poppins'] my-2 text-sky-400 font-semibold">
              baptismal
            </p>
          </div>
        </div>
        <Button
          variant="contained"
          className="bg-pink-primary-400 text-white text-lg font-semibold font-['Poppins'] capitalize py-3 px-6 rounded-lg"
        >
          start planning your event!
        </Button>
      </div>
    </div>
  );
}

export default HomePackages;
