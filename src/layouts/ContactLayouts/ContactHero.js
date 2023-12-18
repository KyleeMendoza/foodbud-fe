import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

import facebook from "../../assets/contact-fb.png";
import instagram from "../../assets/contact-ig.png";
import tiktok from "../../assets/contact-tiktok.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function ContactHero() {
  const [fbInfo, setFbInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/all/fb_info"
        );
        const fetchedFbInfo = response.data.fb_info[0];
        setFbInfo(fetchedFbInfo);
        console.log(fetchedFbInfo);
        console.log(fbInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  // // Check if data is an array, otherwise display a loading message or handle accordingly
  // if (!Array.isArray(data)) {
  //   return <p>Loading...</p>; // or handle the loading state differently
  // }

  return (
    <div className="h-full">
      <div className="flex flex-col justify-center items-start gap-10 font-['Poppins']  py-10 px-10 md:px-20">
        <p className="text-title13 font-bold uppercase text-primary500 text-center monitor:text-heading14 monitor:text-left">
          CONTACT DETAILS AND OFFICE LOCATION
        </p>
        <div className="flex flex-col md:grid grid-cols-2 grid-rows-3 grid-flow-col gap-5 text-body monitor:text-title13">
          <div className="flex items-center gap-2">
            <img
              src={facebook}
              alt="Picture"
              //   className="absolute inset-0 w-full h-full object-cover lg:hidden"
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
            <img
              src={instagram}
              alt="Picture"
              //   className="absolute inset-0 w-full h-full object-cover lg:hidden"
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
            <img
              src={tiktok}
              alt="Picture"
              //   className="absolute inset-0 w-full h-full object-cover lg:hidden"
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
            <p>{fbInfo.contactnum}</p>
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
              {fbInfo.email}
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
            <p>{fbInfo.address}</p>
          </div>
        </div>
        <iframe
          className="w-full md:w-1/2 h-50"
          title="Google Map"
          frameBorder="0"
          style={{ border: 0 }}
          height="410px"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.21064249175!2d121.04404007487588!3d14.757159385747995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1861a86a23d%3A0xce46a4900158d747!2sFood%20Bud%20Events%20and%20Catering%20(Main%20Office)!5e0!3m2!1sen!2sph!4v1701195655574!5m2!1sen!2sph"
        ></iframe>

        <div className="flex justify-center w-full monitor:justify-start">
          <a href="https://maps.app.goo.gl/tzb7615dtmpZoo4p9">
            <button className="bg-secondary400 px-10 py-3 rounded-xl font-heading text-title24 font-semibold text-white">
              Visit Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
