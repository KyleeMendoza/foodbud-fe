import React from "react";

import cw_deal from "../../assets/CW-OurDeal.png";
import cs_aikp from "../../assets/CW-AIKP.png";
import cw_fvs from "../../assets/CW-FVS.jpg";
import cw_as from "../../assets/CW-AS.png";

function Deals() {
  return (
    <div className="border-2 border-red-600 flex flex-col justify-center items-center h-full bg-secondary-50 relative">
      <img
        src={cw_deal}
        alt="Picture"
        className="h-full w-full object-cover absolute"
      />
      <div className="z-10 flex flex-col gap-10 items-center">
        <p className="text-4xl font-bold text-white uppercase">our deals</p>
        <div className="flex items-center justify-center gap-10 ">
          <div className="w-[17%] h-full drop-shadow-xl">
            <img
              src={cs_aikp}
              alt="Picture"
              className="rounded-xl border-2 border-white"
            />
          </div>
          <div className="w-[17%] h-full drop-shadow-xl">
            <img
              src={cw_fvs}
              alt="Picture"
              className="rounded-xl border-2 border-white"
            />
          </div>
          <div className="w-[17%] h-full drop-shadow-xl">
            <img
              src={cw_as}
              alt="Picture"
              className="rounded-xl border-2 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
