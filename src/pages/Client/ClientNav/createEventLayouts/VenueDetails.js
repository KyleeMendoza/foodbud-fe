import React from "react";
import SelectorInput from "../../../../components/SelectorInput";

function VenueDetails({ formData, handleModify, handleSelectorChange }) {
  const [fromTime, setFromTime] = React.useState("");
  const [toTime, setToTime] = React.useState("");
  const [venue, setVenue] = React.useState("");

  const from = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "2:00 AM",
    "2:30 AM",
    "3:00 AM",
    "3:30 AM",
    "4:00 AM",
    "4:30 AM",
    "5:00 AM",
    "5:30 AM",
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];
  const to = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "2:00 AM",
    "2:30 AM",
    "3:00 AM",
    "3:30 AM",
    "4:00 AM",
    "4:30 AM",
    "5:00 AM",
    "5:30 AM",
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
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
            name="venue_address"
            value={formData.venue_address || ""}
            onChange={handleModify}
          />
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Google Pin Location:</p>
          <input
            className="font-normal border-2 p-2 rounded-md w-[50%]"
            type="string"
            name="venue_location"
            value={formData.venue_location || ""}
            onChange={handleModify}
          />
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Venue Hours Booked:</p>
          <div className="flex justify-between items-center w-[50%] gap-2">
            <div className="w-[100%]">
              <SelectorInput
                data={from}
                state={fromTime}
                setter={setFromTime}
                title={formData.venue_time}
                name={"venue_time"}
                handleSelectorChange={handleSelectorChange}
              />
            </div>
            {/* <p>To</p>
            <div className="w-[50%]">
              <SelectorInput
                data={to}
                state={toTime}
                setter={setToTime}
                title={"To"}
              />
            </div> */}
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Venue Floor:</p>
          <div className=" w-[50%] flex flex-start">
            <input
              className="font-normal border-2 p-2 rounded-md w-[50%]"
              type="string"
              name="venue_floor"
              value={formData.venue_floor || ""}
              onChange={handleModify}
            />
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Type of Venue:</p>
          <div className=" w-[50%] flex flex-start">
            <input
              className="font-normal border-2 p-2 rounded-md w-[50%]"
              type="string"
              name="venue_type"
              value={formData.venue_type || ""}
              onChange={handleModify}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default VenueDetails;
