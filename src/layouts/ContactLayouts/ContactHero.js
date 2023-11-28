import React from "react";
import Button from "@mui/material/Button";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function ContactHero() {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-center items-start gap-10 font-['Poppins']  py-10 px-20">
        <p className="text-4xl font-bold uppercase text-primary-500 w-[50%]">
          CONTACT DETAILS AND OFFICE LOCATION
        </p>
        <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-5">
          <div className="flex items-center gap-2">
            <FacebookIcon
              style={{
                fontSize: "3rem",
                color: "#E6479F",
                padding: 2,
              }}
            />
            <a
              href="https://www.facebook.com/foodbudevents"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.facebook.com/foodbudevents
            </a>
          </div>
          <div className="flex items-center gap-2">
            <InstagramIcon
              style={{
                fontSize: "3rem",
                color: "#E6479F",
                padding: 2,
              }}
            />
            <a
              href="https://www.instagram.com/foodbudevents"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.instagram.com/foodbudevents
            </a>
          </div>
          <div className="flex items-center gap-2">
            <TwitterIcon
              style={{
                fontSize: "3rem",
                color: "#E6479F",
                padding: 2,
              }}
            />
            <a
              href="https://www.tiktok.com/@foodbudevents"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.tiktok.com/@foodbudevents
            </a>
          </div>
          <div className="flex items-center gap-2">
            <LocalPhoneIcon
              style={{
                fontSize: "3rem",
                color: "#E6479F",
                padding: 2,
              }}
            />
            <p>0915 175 8015</p>
          </div>
          <div className="flex items-center gap-2">
            <AlternateEmailIcon
              style={{
                fontSize: "3rem",
                color: "#E6479F",
                padding: 2,
              }}
            />
            <a
              href="mailto:foodbudevents@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              foodbudevents@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FmdGoodIcon
              style={{
                fontSize: "3rem",
                color: "#E6479F",
                padding: 2,
              }}
            />
            <p>
              Blk 11 Lot 12 Victoria St., Queensville Subdivision, Caloocan
              City PHL
            </p>
          </div>
        </div>
        <iframe
          className="w-1/2 h-50 "
          title="Google Map"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:YOUR_PLACE_ID&key=YOUR_API_KEY"
          allowFullScreen
        ></iframe>

        <Button variant="contained" size="large">
          Google Map Location
        </Button>
      </div>
    </div>
  );
}

export default ContactHero;

