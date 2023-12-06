import React from "react";
import NavBar from "../../components/NavBar";
import cw_hero from "../../assets/CW-Hero.png";

function Hero() {
  return (
    <div className="flex flex-col h-screen relative ">
      {/* <div className="z-10 ">
        <NavBar />
      </div> */}
      <img
        src={cw_hero}
        alt="Picture"
        className="absolute inset-0 w-full h-full object-cover lg:hidden"
      />
      <div className="flex items-center justify-center flex-1 relative">
        <img
          src={cw_hero}
          alt="Picture"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        />
        <div className="flex flex-col gap-5 lg:gap-3 absolute w-[90%] lg:w-[80%] ">
          <p className=" text-5xl font-bold text-white text-center lg:text-left">
            Elevate Your Events with us!
          </p>
          <p className=" text-lg text-white lg:w-[40%] text-center lg:text-left">
            At Food Bud Events and Catering Services, we are more than just a
            catering company. We're your culinary partners in creating
            unforgettable moments.
          </p>
          <div className=" flex justify-center lg:justify-normal items-center ">
            <a
              href="https://www.messenger.com/t/103596451974308/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0"
              className=" transition-all delay-50 cursor-pointer font-tbc px-7 py-3 text-title13 font-semibold text-white shadow-middle rounded-md bg-primary300 hover:bg-primary400"
            >
              Book Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
