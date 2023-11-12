import React from "react";
import Button from "@mui/material/Button";

function ContactHero() {
  return (
    <div className="flex  justify-center items-start border-2 border-black h-full py-10">
      <div className="flex flex-col justify-center items-start gap-10 border-2 border-green-600 font-['Poppins'] w-[80%]">
        <p className="text-4xl font-bold uppercase text-primary-500 w-[50%]">
          CONTACT DETAILS AND OFFICE LOCATION
        </p>
        <div>
          <p>www.facebook.com/foodbudevents</p>
          <p>www.tiktok.com/@foodbudevents</p>
        </div>
        <div>
          <p>0915 175 8015</p>
          <p>foodbudevents@gmail.com</p>
        </div>
        <p className="text-xl w-[50%]">
          Blk 11 Lot 12 Victoria St., Queensville Subdivision, Caloocan City PHL
        </p>
        <Button variant="contained" size="large">
          Google Map Locaton
        </Button>
      </div>
    </div>
  );
}

export default ContactHero;
