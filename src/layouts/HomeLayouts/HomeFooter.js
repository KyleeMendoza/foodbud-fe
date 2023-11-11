import React from "react";
import cw_event1 from "../../assets/CW-Event1.png";
import logo from "../../assets/G-FoodbudFooterLogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function HomeFooter() {
  return (
    <div className="h-full border-2 border-black">
      <div className="h-full flex flex-col border-2 border-green-600 flex-1 relative">
        <img
          src={cw_event1}
          alt="Picture"
          className="h-full w-full object-cover absolute"
        />
        <div className="absolute inset-0 z-10 bg-[#1E89DD] opacity-60 filter"></div>
        <div className="absolute inset-0 z-20 flex flex-col font-['Poppins'] items-center text-white border-2 border-red-600">
          <div className="w-[85%] 2xl:w-[70%] flex flex-1 py-10 justify-between border-2 border-green-600">
            <div>
              <img src={logo} alt="Picture" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-3xl capitalize">quick links</p>
              <div className="flex flex-col gap-2 capitalize">
                <p>home</p>
                <p>about us</p>
                <p>packages</p>
                <p>gallery</p>
                <p>faqs</p>
                <p>contactus</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-3xl capitalize">contact us</p>
              <div className="flex flex-col gap-2 capitalize">
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
          <div className="bg-pink-primary-400 flex h-[10%] w-full justify-center items-center">
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
