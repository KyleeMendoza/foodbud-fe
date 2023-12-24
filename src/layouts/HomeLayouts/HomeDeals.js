import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import cw_deal from "../../assets/CW-OurDeal.png";
import cs_aikp from "../../assets/CW-AIKP.png";
import cw_fvs from "../../assets/CW-FVS.jpg";
import cw_as from "../../assets/CW-AS.png";

function HomeDeals() {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-center items-center bg-secondary200 relative py-10">
        <img
          src={cw_deal}
          alt="Picture"
          className="h-full w-full object-cover absolute"
        />
        <div className="z-10 flex flex-col gap-20 w-full h-full py-10 justify-center items-center">
          <p className="text-3xl lg:text-4xl font-bold text-white uppercase">
            our deals
          </p>
          <div className="w-full lg:w-[80%] font-heading flex flex-col items-center lg:items-start lg:flex-row flex-1 justify-center gap-10">
            <Link
              to="/packages"
              className="lg:w-[256px] lg:h-[256px] w-[15rem] h-[12rem] bg-gray bg-blend-screen flex flex-col justify-center items-center rounded-2xl bg-cover bg-no-repeat bg-center border-2 border-[#e9f5fe] hover:w-80 hover:h-80 duration-500 ease-in-out"
              style={{ backgroundImage: `url(${cs_aikp})` }}
            >
              <div className="bg-gray bg-opacity-0 hover:bg-opacity-30 duration-100 w-full h-full flex justify-center items-center rounded-2xl">
                <p class="monitor:text-title13 font-tbc font-bold text-body text-white text-center">
                  <span class="">All In Party</span>
                  <br />
                  <span class="">Package</span>
                </p>
              </div>
            </Link>
            <Link
              to="/packages"
              className="lg:w-[256px] lg:h-[256px] w-[15rem] h-[12rem] bg-gray bg-blend-screen flex flex-col justify-center items-center rounded-2xl bg-cover bg-no-repeat bg-center border-2 border-[#e9f5fe] hover:w-80 hover:h-80 duration-500 ease-in-out"
              style={{ backgroundImage: `url(${cw_fvs})` }}
            >
              <div className="bg-gray bg-opacity-0 hover:bg-opacity-30 duration-100 w-full h-full flex justify-center items-center rounded-2xl">
                <p class="monitor:text-title13 font-tbc font-bold text-body text-white text-center">
                  <span class="">Full Venue</span>
                  <br />
                  <span class="">Styling</span>
                </p>
              </div>
            </Link>
            <Link
              to="/packages"
              className="lg:w-[256px] lg:h-[256px] w-[15rem] h-[12rem] bg-gray bg-blend-screen flex flex-col justify-center items-center rounded-2xl bg-cover bg-no-repeat bg-center border-2 border-[#e9f5fe] hover:w-80 hover:h-80 duration-500 ease-in-out"
              style={{ backgroundImage: `url(${cw_as})` }}
            >
              <div className="bg-gray bg-opacity-0 hover:bg-opacity-30 duration-100 w-full h-full flex justify-center items-center rounded-2xl">
                <p class="monitor:text-title13 font-tbc font-bold text-body text-white text-center">
                  <span class="">Additional</span>
                  <br />
                  <span class="">Services</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDeals;
