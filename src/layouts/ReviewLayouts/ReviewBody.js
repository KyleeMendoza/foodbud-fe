import React from "react";
import cwreview1 from "../../assets/cw-review1.png";
import facebook from "../../assets/fb-icon.png";
import instagram from "../../assets/ig-icon.png";
import tiktok from "../../assets/tiktok-icon.png";
import { InsertPageBreak } from "@mui/icons-material";

function ReviewBody() {
  return (
    <div className="flex flex-col items-center w-full h-fit mb-20">
      <div
        className="w-full h-[40vh] bg-contain lg:bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${cwreview1})` }}
      ></div>
      <div className="flex w-full h-fit py-10 text-center">
        {/* First Section */}
        <div className="w-1/4 px-2 py-32">
          <div className="flex flex-col items-end gap-10">
            <a href="https://www.facebook.com/foodbudevents">
              <img
                src={facebook}
                alt="Picture"
                //   className="absolute inset-0 w-full h-full object-cover lg:hidden"
              />
            </a>

            {/* Ig Icon */}
            <a href="https://www.instagram.com/foodbudevents">
              <img
                src={instagram}
                alt="Picture"
                //   className="absolute inset-0 w-full h-full object-cover lg:hidden"
              />
            </a>

            {/* Tiktok Icon */}
            <a href="https://www.tiktok.com/@foodbudevents">
              <img
                src={tiktok}
                alt="Picture"
                //   className="absolute inset-0 w-full h-full object-cover lg:hidden"
              />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-1/2 bg-red">hello</div>

        {/* Other Stories */}
        <div className="flex items-end w-1/4">
          <div className="flex flex-col w-1/2 items-start gap-10">
            <p className="font-heading font-medium text-heading36">
              Other Reviews
            </p>
            {/* Other Story box */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-3 text-left">
                <p className="font-tbc font-bold text-body">
                  Enchanting Memories with Food Bud Events & Catering Services.
                  Celebrating our Little Sister’s 7th Birthday.
                </p>
                <p className="font-tbc text-body">By Kristel Anne Tuscano</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col gap-3 text-left">
                <p className="font-tbc font-bold text-body">
                  A Fulfilling Celebration Thanks to the Exceptional Team at
                  Food Bud Events& Catering Services
                </p>
                <p className="font-tbc text-body">By Jongko Janina</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col gap-3 text-left">
                <p className="font-tbc font-bold text-body">
                  Food Bud Events and Catering Services showcased transforming
                  event into a truly remarkable experience
                </p>
                <p className="font-tbc text-body">By Bea Yuvienco</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewBody;
