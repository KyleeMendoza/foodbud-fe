import React, { useEffect } from "react";
import cwreview1 from "../../assets/cw-review1.png";
import facebook from "../../assets/fb-icon.png";
import instagram from "../../assets/ig-icon.png";
import tiktok from "../../assets/tiktok-icon.png";
import { InsertPageBreak } from "@mui/icons-material";
import { useLocation } from "react-router";
import StarIcon from "@mui/icons-material/Star";

function ReviewBody() {
  const reviewData = useLocation();
  const reviewJson = reviewData.state.data;

  // useEffect(() => {
  //   console.log("reviewJson:", reviewJson);
  // }, []);

  return (
    <div className="flex flex-col items-center w-full h-fit mb-10  relative">
      <div
        className="w-full h-[40vh] bg-contain lg:bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${cwreview1})` }}
      ></div>
      <div className="flex justify-between w-full h-fit text-center mt-10">
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
        <div className="w-1/2 h-[80%] flex justify-center absolute left-1/4 bottom-0 rounded-xl">
          <div
            className="bg-white w-[95%] p-5 rounded-xl drop-shadow-lg hover:cursor-pointer"
            style={{ boxShadow: " 0px 0px 16px 0px rgba(0,0,0,0.5)" }}
          >
            <div className="flex justify-between ">
              <div className="flex flex-col gap-2 ">
                <p className="text-xl lg:text-2xl font-bold text-sky-600 capitalize">
                  {reviewJson.name}
                </p>
                <p className="text-slate-400 text-body lg:text-title24">
                  {reviewJson.date}
                </p>
              </div>
              <div className="text-yellow-400">
                {[...Array(reviewJson.stars)].map((_, index) => (
                  <StarIcon key={index}></StarIcon>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-8 text-body lg:text-title24">
              <p>{reviewJson.comment}</p>
            </div>
          </div>
        </div>

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
