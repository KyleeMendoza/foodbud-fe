import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SelectorInput from "../../../../components/SelectorInput";

function AdditionalDetails({ formData, handleModify }) {
  const [startTime, setStartTime] = React.useState("");
  const [fromTime, setFromTime] = React.useState("");
  const [toTime, setToTime] = React.useState("");
  const [set, setSet] = React.useState("");

  const setData = [
    "Pancake (Chocolate or maple syrup)",
    "Juice bar (2 flavors)",
    "Mixed balls (Fish Ball, kikiam and etc.)",
    "Ice cream (Ube, Choco, Cheese)",
    "Hotdog on Stick (Tender Juicy)",
    "Ice scramble",
    "Siomai",
    "Cheesy buttered corn",
    "Unlimited Cotton candy",
    "Unlimited Popcorn",
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

  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <p className="text-primary-400 font-bold text-2xl">Addtional Details</p>
      </div>
      <div className="flex flex-col w-[70%] gap-4">
        <div className="flex flex-col gap-4 p-4 rounded-lg border-2 ">
          <p className="text-[#E7238B] text-xl font-bold">
            Services included in the package:
          </p>
          <div className="px-10">
            <ul className="list-disc text-lg font-bold flex flex-col gap-2">
              <li>Host Magician</li>
              <li>Photobooth</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col p-4 rounded-lg border-2 ">
          <p className="text-[#E7238B] text-xl font-bold">Photobooth:</p>
          <div className="w-[80%]">
            <label className="flex items-center justify-between">
              <p className="font-semibold">Photobooth Start Time:</p>
              <div className=" w-[50%] flex flex-start">
                <div className=" w-[50%] ">
                  <SelectorInput
                    data={startTimeData}
                    state={startTime}
                    setter={setStartTime}
                    title={"Start"}
                  />
                </div>
              </div>
            </label>{" "}
          </div>
        </div>
        <div className="flex flex-col p-4 rounded-lg border-2 ">
          <p className="text-[#E7238B] text-xl font-bold">Church Coverage:</p>
          <div className="w-[80%] flex flex-col gap-4">
            <label className="flex items-center justify-between">
              <p className="font-semibold">Church Name:</p>
              <input
                className="font-normal border-2 p-2 rounded-md w-[50%]"
                type="string"
                placeholder="Enter Address"
              />
            </label>
            <label className="flex items-center justify-between">
              <p className="font-semibold">Church Location:</p>
              <input
                className="font-normal border-2 p-2 rounded-md w-[50%]"
                type="string"
                placeholder="Enter Address"
              />
            </label>
            <label className="flex items-center justify-between">
              <p className="font-semibold">Photobooth Start Time:</p>
              <div className=" w-[50%] flex flex-start items-center gap-2">
                <div className=" w-[50%] ">
                  <SelectorInput
                    data={from}
                    state={fromTime}
                    setter={setFromTime}
                    title={"From"}
                  />
                </div>
                <p>to</p>
                <div className=" w-[50%] ">
                  <SelectorInput
                    data={to}
                    state={toTime}
                    setter={setToTime}
                    title={"To"}
                  />
                </div>
              </div>
            </label>{" "}
          </div>
        </div>
        <div className="flex flex-col p-4 rounded-lg border-2 ">
          <p className="text-[#E7238B] text-xl font-bold">Cake:</p>
          <div className="w-[80%]">
            <label className="flex items-center justify-between">
              <p className="font-semibold">Peg theme for the cake:</p>
              <input
                className="font-normal border-2 p-2 rounded-md w-[50%]"
                type="string"
                placeholder="Enter Address"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col p-4 rounded-lg border-2 ">
          <p className="text-[#E7238B] text-xl font-bold">Food Cart Choices:</p>
          <div className="w-[80%] flex flex-col gap-4">
            <label className="flex items-center justify-between">
              <p className="font-semibold">Choice #1:</p>
              <div className=" w-[50%] flex flex-start">
                <SelectorInput
                  data={setData}
                  state={set}
                  setter={setSet}
                  title={"Select Here"}
                />
              </div>
            </label>
            <label className="flex items-center justify-between">
              <p className="font-semibold">Choice #2:</p>
              <div className=" w-[50%] flex flex-start">
                <SelectorInput
                  data={setData}
                  state={set}
                  setter={setSet}
                  title={"Select Here"}
                />
              </div>
            </label>
            <label className="flex items-center justify-between">
              <p className="font-semibold">Choice #3:</p>
              <div className=" w-[50%] flex flex-start">
                <SelectorInput
                  data={setData}
                  state={set}
                  setter={setSet}
                  title={"Select Here"}
                />
              </div>
            </label>
            <label className="flex items-center justify-between">
              <p className="font-semibold">Choice #4:</p>
              <div className=" w-[50%] flex flex-start">
                <SelectorInput
                  data={setData}
                  state={set}
                  setter={setSet}
                  title={"Select Here"}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
      <FormControlLabel
        required
        control={<Checkbox />}
        label={
          <span>
            Upon filling out this form and sending of my payment, I acknowledge
            that I have read and accept the{" "}
            <span className="text-primary-400">terms and conditions</span>.
          </span>
        }
      />
    </div>
  );
}

export default AdditionalDetails;
