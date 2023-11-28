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
    <div className=" h-full ">
      <div className=" flex flex-col py-10 gap-10 text-center items-center ">
        <p className="w-[95%] lg:w-full text-xl lg:text-xl capitalize font-['Poppins'] text-sky-400 font-semibold">
          Crafting unforgettable moments, one bite at a time.
        </p>
        <div className=" w-[104%] lg:w-[70%] lg:h-[25rem] 2xl:h-[30rem]">
          {/* <img
          src={cw_event1}
          alt="Picture"
          className=" border-2 border-green-600 object-cover h-[100%] w-[100%]"
        /> */}
          <Carousel />
        </div>
        <div className=" w-[100%] overflow-x-auto lg:flex lg:justify-center lg:items-center ">
          <div className="flex w-[200%] lg:w-auto overflow-x-auto gap-5 py-2 justify-around px-4 items-center lg:h-[16rem] xl:h-[18rem] 2xl:h-[21rem] ">
            <div className="h-[14rem] w-[17rem] lg:w-[30%] lg:h-full my-5 lg:my-0 text-center rounded-xl drop-shadow-lg bg-white ">
              <img
                src={cw_ebox1}
                alt=""
                className="w-full h-[80%] rounded-t-xl"
              />
              <p className="text-lg capitalize font-['Poppins'] my-2 text-sky-400 font-semibold">
                baptismal
              </p>
            </div>
            <div className="h-[14rem] w-[17rem] lg:w-[30%] lg:h-full my-5 lg:my-0 text-center rounded-xl drop-shadow-lg bg-white">
              <img
                src={cw_ebox2}
                alt=""
                className="w-full h-[80%] rounded-t-xl"
              />
              <p className="text-lg capitalize font-['Poppins'] my-2 text-sky-400 font-semibold">
                baptismal
              </p>
            </div>
            <div className="h-[14rem] w-[17rem] lg:w-[30%] lg:h-full my-5 lg:my-0 text-center rounded-xl drop-shadow-lg bg-white">
              <img
                src={cw_ebox3}
                alt=""
                className="w-full h-[80%] rounded-t-xl"
              />
              <p className="text-lg capitalize font-['Poppins'] my-2 text-sky-400 font-semibold">
                baptismal
              </p>
            </div>
            <div className="h-[14rem] w-[17rem] lg:w-[30%] lg:h-full my-5 lg:my-0 text-center rounded-xl drop-shadow-lg bg-white">
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
        </div>
        <Button
          variant="contained"
          className="bg-pink-primary-400 text-white text-md lg:text-lg font-semibold font-['Poppins'] capitalize py-3 px-6 rounded-lg"
        >
          start planning your event!
        </Button>
      </div>
    </div>
  );
}

export default HomePackages;
