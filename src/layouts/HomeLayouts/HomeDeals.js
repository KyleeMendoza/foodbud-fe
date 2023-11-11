import React from "react";

import cw_deal from "../../assets/CW-OurDeal.png";
import cs_aikp from "../../assets/CW-AIKP.png";
import cw_fvs from "../../assets/CW-FVS.jpg";
import cw_as from "../../assets/CW-AS.png";

function HomeDeals() {
  return (
    <div className="border-2 border-black  h-full ">
      <div className="border-2 border-green-600 h-full flex flex-col justify-center items-center bg-secondary-50 relative">
        <img
          src={cw_deal}
          alt="Picture"
          className="h-full w-full object-cover absolute"
        />
        <div className="w-full z-10 flex flex-col lg:h-[70%] xl:h-[80%] justify-center items-center border-2 border-red-600">
          <p className="py-5 text-4xl font-bold text-white uppercase">
            our deals
          </p>
          <div className="w-[80%] flex flex-1 justify-around border-2 border-red-600">
            <img
              src={cs_aikp}
              alt="Picture"
              className="rounded-xl w-[25%] h-full border-2 border-white"
            />
            <img
              src={cs_aikp}
              alt="Picture"
              className="rounded-xl w-[25%] h-full border-2 border-white"
            />
            <img
              src={cs_aikp}
              alt="Picture"
              className="rounded-xl w-[25%] h-full border-2 border-white"
            />
            {/* <div className="w-[23%] h-full drop-shadow-xl">
              <img
                src={cw_fvs}
                alt="Picture"
                className="rounded-xl border-2 border-white"
              />
            </div>
            <div className="w-[23%] h-full drop-shadow-xl">
              <img
                src={cw_as}
                alt="Picture"
                className="rounded-xl border-2 border-white"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDeals;
