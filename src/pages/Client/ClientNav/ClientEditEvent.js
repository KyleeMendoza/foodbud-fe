import React from "react";
import EventStepper from "../../../components/EventStepper";
import Button from "@mui/material/Button";
import CelebrantDetails from "./createEventLayouts/CelebrantDetails";

function ClientEditEvent() {
  return (
    <div className=" pt-10">
      <div className="flex flex-col gap-10  bg-white p-10 rounded-2xl">
        <div className="flex flex-col gap-2 ">
          <p className="text-[#03A9F4] font-bold text-2xl">Event Form</p>
          <p className="text-[#03A9F4]">
            In order to enhance the efficiency of the reservation process and
            ensure a smooth experience for you, we kindly request that you take
            a moment to complete the form provided below. Your cooperation in
            providing accurate and detailed information is greatly valued, and
            it will contribute to a more seamless and enjoyable reservation
            process. Thank you for choosing us, and we look forward to serving
            you!
          </p>
        </div>
        <div className=" px-5">
          <EventStepper />
        </div>
      </div>
    </div>
  );
}

export default ClientEditEvent;
