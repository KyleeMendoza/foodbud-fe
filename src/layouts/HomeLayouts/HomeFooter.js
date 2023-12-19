import React from "react";
import cw_footerBg from "../../assets/CW-FooterBG.png";
import logo from "../../assets/G-FoodbudFooterLogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function HomeFooter() {
  return (
    <div
      className="h-full "
      style={{
        backgroundImage: `url(${cw_footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // filter: "blur(5px)", // Add the desired filter
        // opacity: 1, // Add the desired opacity (0 to 1)
      }}
    >
      {/* <div className="absolute inset-0 z-10 bg-[#1E89DD] opacity-60 filter"></div> */}
      <div className=" z-20">
        <div className="w-1/2 flex flex-col gap-10 lg:gap-0 lg:flex-row text-center lg:text-start items-center lg:items-start py-10 lg:pt-10 flex-1  lg:justify-around px-5 lg:px-0 ">
          <div className="hidden lg:block">
            <img src={logo} alt="Picture" />
          </div>
          <div className="flex flex-col gap-4 text-white">
            <p className="font-bold text-3xl capitalize text-title13 monitor:text-heading14">
              quick links
            </p>
            <div className="flex flex-col gap-2 capitalize text-body monitor:text-title24">
              <a href="">home</a>
              <a href="/aboutUs">about us</a>
              <a href="/packages">packages</a>
              <a href="/gallery">gallery</a>
              <a href="/faqs">faqs</a>
              <a href="/contactUs">contact us</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <p className="hidden lg:block font-bold text-heading14 capitalize">
              contact us
            </p>
            <div className="flex flex-col items-center text-body monitor:text-title24 lg:items-start gap-2 px-5 monitor:px-0">
              <p>
                Maligaya Park Subdivision, Blk 12 Lot 5 St.. Bernadette,
                Barangay 177, Caloocan, 1423 Metro Manila
              </p>
              <p>foodbudevents@gmail.com</p>
              <p>0915 175 8015</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/foodbudevents"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https:www.instagram.com/foodbudevents"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https:www.tiktok.com/@foodbudevents"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-3 bg-primary400 h-[10%] w-1/2">
          <p className="text-caption monitor:text-body text-white">
            Copyright © 2023 Foodbud Events & Catering Services | All Rights
            Reserved
          </p>
        </div>
      </div>

      {/* <div className="h-full flex flex-col  flex-1 relative">
        <img
          src={cw_event1}
          alt="Picture"
          className="h-full w-full object-cover absolute"
        />
        <div className="absolute inset-0 z-10 bg-[#1E89DD] opacity-60 filter "></div>
        <div className="absolute inset-0 z-20 flex flex-col font-['Poppins'] items-center text-white ">
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row text-center lg:text-start items-center lg:items-start py-10 lg:pt-10 flex-1 w-full lg:justify-around px-5 lg:px-0 ">
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
              <p className="hidden lg:block font-bold text-3xl capitalize">
                contact us
              </p>
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
          <div className="flex justify-center items-center py-3 bg-pink-primary-400 h-[10%] w-full">
            <p className="text-sm text-white">
              Copyright © 2023 Elysium | All Rights Reserved
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HomeFooter;
