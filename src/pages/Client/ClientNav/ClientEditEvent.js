import React from "react";
import EventStepper from "../../../components/EventStepper";
import Button from "@mui/material/Button";
import CelebrantDetails from "./createEventLayouts/CelebrantDetails";

function ClientEditEvent() {
  return (
    <div className="border-2 border-red-600 pt-10">
      <div className="flex flex-col gap-10 border-2 border-green-600 bg-white p-10 rounded-2xl">
        <div className="flex flex-col gap-2 border-2 border-red-600">
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
        {/* <div className="flex flex-col gap-4 border-2 border-red-600">
          <div>
            <p className="text-primary-400 font-bold text-2xl">Celebrant</p>
          </div>
          <div className="flex flex-col w-[50%] gap-4">
            <label className="flex items-center justify-between">
              <p className="font-semibold">Celebrant Name:</p>
              <input
                className="font-normal border-2 p-2 rounded-md w-[50%]"
                type="string"
                placeholder="Rocel"
              />
            </label>
            <label className="flex items-center justify-between">
              <p className="font-semibold">Age:</p>
              <input
                className="font-normal border-2 p-2 rounded-md w-[50%]"
                type="string"
                placeholder="Age"
              />
            </label>
          </div>
        </div> */}
        <div className="border-2 border-red-600 px-5">
          <EventStepper />
        </div>
      </div>
    </div>
  );
}

export default ClientEditEvent;
