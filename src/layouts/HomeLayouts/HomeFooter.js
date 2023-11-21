import React from "react";
import cw_event1 from "../../assets/CW-Event1.png";
import logo from "../../assets/G-FoodbudFooterLogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function HomeFooter() {
  return (
    <div className="h-full ">
      <div className="h-full flex flex-col  flex-1 relative">
        <img
          src={cw_event1}
          alt="Picture"
          className="h-full w-full object-cover absolute"
        />
        <div className="absolute inset-0 z-10 bg-[#1E89DD] opacity-60 filter border-4 border-yellow-600"></div>
        <div className="absolute inset-0 z-20 flex flex-col font-['Poppins'] items-center text-white border-4 border-red-600">
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row text-center lg:text-start items-center lg:items-start py-10 lg:pt-10 flex-1 w-full lg:justify-around px-5 lg:px-0 border-4 border-yellow-600">
            <div className="hidden lg:block">
              <img src={logo} alt="Picture" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-3xl capitalize">quick links</p>
              <div className="flex flex-col gap-2 capitalize">
                <a href="/">home</a>
                <a href="/aboutUs">about us</a>
                <a href="/packages">packages</a>
                <a href="/gallery">gallery</a>
                <a href="/faqs">faqs</a>
                <a href="/contactUs">contactus</a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-3xl capitalize">contact us</p>
              <div className="flex flex-col items-center lg:items-start gap-2 capitalize">
                <p>
                  Queensville Subd., Blk 11 Lot 12 Victoria St., Caloocan City
                  PHL
                </p>
                <p>foodbudevents@gmail.com</p>
                <p>0915 175 8015</p>
                <div className="flex gap-4">
                  {<FacebookIcon />}
                  {<InstagramIcon />}
                  {<TwitterIcon />}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center border-2 border-green-600 bg-pink-primary-400 h-[10%] w-full">
            <p className="text-sm text-white">
              Copyright © 2023 Elysium | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
