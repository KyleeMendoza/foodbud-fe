import React from "react";
import SelectorInput from "../../../../components/SelectorInput";

function EventDetails({ formData, handleModify, handleSelectorChange }) {
  const [preparationTime, setPreparationTime] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [eventType, setEventType] = React.useState("");

  const preparationTimeData = [
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
  const startTimeData = [
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
  const events = ["1st Birthday", "Wedding Anniversary", "Graduation", "Debut"];
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <p className="text-primary-400 font-bold text-2xl">Event Details</p>
      </div>
      <div className="flex flex-col w-[50%] gap-4">
        <label className="flex items-center justify-between">
          <p className="font-semibold">Event Date:</p>
          <input
            className="font-normal border-2 p-2 rounded-md w-[50%]"
            type="string"
            name="event_date"
            value={formData.event_date || ""}
            onChange={handleModify}
          />
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Preparation Time:</p>
          <div className=" w-[50%] flex flex-start">
            <SelectorInput
              data={preparationTimeData}
              state={preparationTime}
              setter={setPreparationTime}
              title={formData.prep_time}
              name={"prep_time"}
              handleSelectorChange={handleSelectorChange}
            />
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Start Time:</p>
          <div className=" w-[50%] flex flex-start">
            <SelectorInput
              data={startTimeData}
              state={startTime}
              setter={setStartTime}
              title={formData.start_time}
              name={"start_time"}
              handleSelectorChange={handleSelectorChange}
            />
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Type of Event:</p>
          <div className=" w-[50%] flex flex-start">
            <input
              className="font-normal border-2 p-2 rounded-md w-[50%]"
              type="string"
              name="event_type"
              value={formData.event_type || ""}
              onChange={handleModify}
            />
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Theme of Event:</p>
          <input
            className="font-normal border-2 p-2 rounded-md w-[50%]"
            type="string"
            name="theme"
            value={formData.theme || ""}
            onChange={handleModify}
          />
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Color Theme:</p>
          <input
            className="font-normal border-2 p-2 rounded-md w-[50%]"
            type="string"
            name="color_theme"
            value={formData.color_theme || ""}
            onChange={handleModify}
          />
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Adults Count:</p>
          <div className=" w-[50%] flex flex-start">
            <input
              className="font-normal border-2 p-2 rounded-md w-[50%]"
              type="string"
              placeholder="Adult"
            />
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Kids Count:</p>
          <div className=" w-[50%] flex flex-start">
            <input
              className="font-normal border-2 p-2 rounded-md w-[50%]"
              type="string"
              placeholder="Kids"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default EventDetails;
