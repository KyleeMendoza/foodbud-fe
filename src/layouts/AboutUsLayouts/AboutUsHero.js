import React from "react";

import teamwork from "../../assets/cwau-teamwork.png";
import integrity from "../../assets/cwau-integrity.png";
import qai from "../../assets/cwau-qai.png";
import custdriven from "../../assets/cwau-custdriven.png";

function AboutUsHero() {
  return (
    <div className="h-full flex flex-col items-center border-2 border-black">
      <div className="flex flex-col xl:h-[85%] lg:h-[90%] lg:mt-10 mt-20 2xl:w-[80%] items-center justify-around border-2 border-green-600">
        <div className="w-[60%] font-['Poppins'] text-center border-2 border-red-600">
          <p className="text-black font-bold text-4xl capitalize">about us</p>
          <p className="text-md">
            This is the part where we will introduce food bud in a short
            description only were we are like trying to promote our business to
            therm and convince tthem to book an event with us chucu
          </p>
        </div>
        <div className="w-[80%] font-['Poppins'] border-2 border-red-600">
          <div className="flex justify-between">
            <div className="flex w-[45%] p-5 gap-12 border-2 border-black">
              <p className="text-black font-bold text-3xl capitalize">
                mission
              </p>
              <p className="text-md">
                Every event is special. We aim to exceed our client's
                expectation by giving our hundred percent best in every event.
              </p>
            </div>
            <div className="flex w-[45%] p-5 gap-12 border-2 border-black">
              <p className="text-black font-bold text-3xl capitalize">
                vission
              </p>
              <p className="text-md">
                To be one of Metro Manila's best known for event and party
                organizer, by providing a quality service for a reasonable
                price.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[70%] font-['Poppins'] border-2 border-red-600">
          <div className="flex justify-between text-black font-bold text-xl capitalize ">
            <div className="flex flex-col items-center gap-4 text-center ">
              <img src={teamwork} alt="teamwork" className="w-42 h-40 " />
              <p>teamwork</p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center ">
              <img src={custdriven} alt="custdriven" className="w-40 h-40" />
              <p>customer-driven</p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center ">
              <img src={integrity} alt="integrity" className="w-42 h-40" />
              <p>integrity</p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center ">
              <img src={qai} alt="qai" className="w-40 h-40" />
              <p>quality &amp; education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHero;
