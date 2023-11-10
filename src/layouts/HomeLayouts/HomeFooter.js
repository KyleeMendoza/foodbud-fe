import React from "react";
import cw_event1 from "../../assets/CW-Event1.png";
import logo from "../../assets/G-FoodbudFooterLogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function HomeFooter() {
  return (
    <div className="flex flex-col h-full">
      <div
        className=" border-4 border-green-600 flex-1 relative"
        style={{
          backgroundImage: `url(${cw_event1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Set the background size to cover
          backgroundPosition: "bottom center", // Center the background image
        }}
      >
        <div className="absolute inset-0 z-10 bg-[#1E89DD] opacity-60 filter"></div>
        <div className="absolute inset-0 z-20 w-full flex justify-center items-center font-['Poppins'] text-white border-2 border-red-600">
          <div className="w-[85%] flex justify-between ">
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
        </div>
      </div>
      <div className="bg-pink-primary-400 h-[10%] flex justify-center items-center">
        <p className="text-sm text-white">
          Copyright © 2023 Elysium | All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default HomeFooter;
