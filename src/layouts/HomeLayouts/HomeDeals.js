import React from "react";

import cw_deal from "../../assets/CW-OurDeal.png";
import cs_aikp from "../../assets/CW-AIKP.png";
import cw_fvs from "../../assets/CW-FVS.jpg";
import cw_as from "../../assets/CW-AS.png";

function HomeDeals() {
  return (
    <div className="  h-full ">
      <div className=" h-full flex flex-col justify-center items-center bg-secondary-50 relative">
        <img
          src={cw_deal}
          alt="Picture"
          className="h-full w-full object-cover absolute"
        />
        <div className="w-full z-10 flex flex-col h-full py-10 lg:p-0 lg:h-[70%] justify-center items-center border-2 border-red-600">
          <p className="py-5 2xl:py-5 text-3xl lg:text-4xl font-bold text-white uppercase">
            our deals
          </p>
          <div className="lg:w-[80%] font-['Poppins'] flex flex-col items-center lg:items-start lg:flex-row flex-1 justify-center gap-10 border-2 border-green-600">
            <div className="lg:w-[25%] lg:h-full w-[20rem] h-[15rem] rounded-xl border-2 border-white flex justify-center items-center text-center relative">
              <img
                src={cs_aikp}
                alt="Picture"
                className="rounded-xl w-full h-full blur-[1px]"
              />
              <p className="font-semibold text-white text-2xl lg:text-lg absolute capitalize  w-[50%]">
                all in party package
              </p>
            </div>
            <div className="lg:w-[25%] lg:h-full w-[20rem] h-[15rem] rounded-xl border-2 border-white flex justify-center items-center text-center relative">
              <img
                src={cw_fvs}
                alt="Picture"
                className="rounded-xl w-full h-full  blur-[1px]"
              />
              <p className="font-semibold text-white text-2xl lg:text-lg absolute capitalize w-[50%]">
                full venue styling
              </p>
            </div>
            <div className="lg:w-[25%] lg:h-full w-[20rem] h-[15rem] rounded-xl border-2 border-white flex justify-center items-center text-center relative">
              <img
                src={cw_as}
                alt="Picture"
                className="rounded-xl w-full h-full blur-[1px]"
              />
              <p className="font-semibold text-white text-2xl lg:text-lg absolute capitalize  w-[50%]">
                additional services
              </p>
            </div>
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
