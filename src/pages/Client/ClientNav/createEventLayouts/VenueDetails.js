import React from "react";
import SelectorInput from "../../../../components/SelectorInput";

function VenueDetails() {
  const [fromTime, setFromTime] = React.useState("");
  const [toTime, setToTime] = React.useState("");
  const [venue, setVenue] = React.useState("");

  const from = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    // Add more times as needed
  ];
  const to = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    // Add more times as needed
  ];

  const venues = ["Outdoor", "Private", "Pool", "Beach"];
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <p className="text-primary-400 font-bold text-2xl">Venue Details</p>
      </div>
      <div className="flex flex-col w-[50%] gap-4">
        <label className="flex items-center justify-between">
          <p className="font-semibold">Venue Name:</p>
          <input
            className="font-normal border-2 p-2 rounded-md w-[50%]"
            type="string"
            placeholder="Rocel"
          />
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Google Pin Location:</p>
          <input
            className="font-normal border-2 p-2 rounded-md w-[50%]"
            type="string"
            placeholder="Age"
          />
        </label>
        <label className="flex items-center justify-between ">
          <p className="font-semibold">Venue Hours Booked:</p>
          {/* <input
            className="font-normal border-2 p-2 rounded-md w-[50%]"
            type="string"
            placeholder="Age"
          /> */}
          <div className="flex justify-between items-center  gap-2">
            <SelectorInput
              data={from}
              state={fromTime}
              setter={setFromTime}
              title={"From"}
            />
            <p>To</p>
            <SelectorInput
              data={to}
              state={toTime}
              setter={setToTime}
              title={"To"}
            />
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Venue Floor:</p>
          <div className=" w-[50%] flex flex-start">
            <input
              className="font-normal border-2 p-2 rounded-md w-[50%]"
              type="string"
              placeholder="Age"
            />
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Type of Venue:</p>
          {/* <input
            className="font-normal border-2 p-2 rounded-md w-[50%]"
            type="string"
            placeholder="Age"
          /> */}
          <div className=" w-[50%] flex flex-start">
            <SelectorInput
              data={venues}
              state={venue}
              setter={setVenue}
              title={"Venue"}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default VenueDetails;
