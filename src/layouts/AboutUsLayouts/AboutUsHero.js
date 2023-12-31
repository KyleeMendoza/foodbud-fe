import React from "react";

import teamwork from "../../assets/cwau-teamwork.png";
import integrity from "../../assets/cwau-integrity.png";
import qai from "../../assets/cwau-qai.png";
import custdriven from "../../assets/cwau-custdriven.png";

function AboutUsHero() {
  return (
    <div className="h-fit lg:h-screen">
      <div className="flex flex-col items-center justify-start py-10 gap-10 2xl:py-20 2xl:gap-20 h-full">
        {/* About Us Opening Statement */}
        <div className="flex flex-col p-10 lg:gap-0 justify-center items-center lg:block w-full lg:w-[60%] lg:px-0 font-heading text-center ">
          <p className="text-[#e91e63] mb-5 font-bold text-4xl capitalize ">
            about us
          </p>
          <p className="text-md w-[98%] lg:w-full">
            Step into a world of culinary delight and seamless events with Food
            Bud – your gateway to memorable celebrations. Discover why our touch
            makes all the difference.
          </p>
        </div>
        {/* Mission Vision */}
        <div className="w-full lg:px-0 lg:w-[80%] font-heading ">
          <div className="flex flex-col px-10 gap-10 justify-evenly lg:gap-0 lg:px-0 lg:flex-row">
            <div className="flex flex-col lg:flex-row text-center lg:text-start w-full lg:w-[45%] p-5 gap-5 lg:gap-12 border-2 border-black rounded-2xl">
              <p className="text-[#e91e63] font-bold text-3xl capitalize">
                mission
              </p>
              <p className="text-md">
                Every event is special. We aim to exceed our client's
                expectation by giving our hundred percent best in every event.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row text-center lg:text-start w-full lg:w-[45%] p-5  gap-5 lg:gap-12 border-2 border-black rounded-2xl">
              <p className="text-[#e91e63] font-bold text-3xl capitalize">
                vision
              </p>
              <p className="text-md">
                To be one of Metro Manila's best known for event and party
                organizer, by providing a quality service for a reasonable
                price.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[70%] font-heading">
          <div className="lg:flex justify-between text-black font-bold capitalize grid grid-rows-2 grid-cols-2 gap-5">
            <div className="flex flex-col items-center gap-4 text-center ">
              <img
                src={teamwork}
                alt="teamwork"
                className="w-28 h-28 lg:w-40 lg:h-40 "
              />
              <p className="text-sm lg:text-xl">teamwork</p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center ">
              <img
                src={custdriven}
                alt="custdriven"
                className="w-28 h-28 lg:w-40 lg:h-40"
              />
              <p className="text-sm lg:text-xl">customer-driven</p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center ">
              <img
                src={integrity}
                alt="integrity"
                className="w-28 h-28 lg:w-40 lg:h-40"
              />
              <p className="text-sm lg:text-xl">integrity</p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center ">
              <img src={qai} alt="qai" className="w-28 h-28 lg:w-40 lg:h-40" />
              <p className="text-sm lg:text-xl">quality &amp; education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHero;
