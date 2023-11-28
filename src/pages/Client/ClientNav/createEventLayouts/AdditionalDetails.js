import React, { useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SelectorInput from "../../../../components/SelectorInput";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

function AdditionalDetails({ formData, handleModify, eventId }) {
  const [startTime, setStartTime] = React.useState("");
  const [fromTime, setFromTime] = React.useState("");
  const [toTime, setToTime] = React.useState("");
  const [set, setSet] = React.useState("");
  const [selectedService, setSelectedService] = React.useState("");
  const [displayedServices, setDisplayedServices] = React.useState([]);

  // useEffect (() =>{
  //   console.log( eventId)

  // }, [eventId])

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

  const serviceOptions = [
    "Host Magician",
    "Bubble Show",
    "Face Painting",
    "Mascots",
    "Lights and Sounds",
    "Lights & Sounds Adult",
    "Cake & Cupcakes",
    "Photobooth Standee",
    "Photobooth Magnetic",
    "Photo Coverage",
    "Photo Coverage + Church",
    "Photo & Video Coverage",
    "Photo & Video Coverage + Church",
    "4 pcs Food Carts 50 pax",
    "4 pcs Food Carts 100 pax",
    "Lighted Number",
    "Food Warmer",
    "Kiddie Table & Chair",
    "Lighted Entrance Arch",
    "Backdrop Panel",
    "Ceiling Balloons (300 pcs)",
    "Peacock Chair",
  ];

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const addService = () => {
    if (selectedService !== "") {
      setDisplayedServices([...displayedServices, selectedService]);
      setSelectedService("");

      axios
        .post("https://3.27.163.46/api/additional/food", {
          event_id: eventId,
          addons: selectedService,
        })
        .then((response) => {
          console.log("POST request successful:", response.data);
        })
        .catch((error) => {
          console.error("Error making POST request:", error);
        });

      setSelectedService("");
    }
  };

  const startTimeData = [
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
    // Add more times as needed
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

  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <p className="text-primary-400 font-bold text-2xl">
          Additional Details
        </p>
      </div>
      <div className="flex flex-col w-[70%] gap-4">
        <div className="flex flex-col gap-4 p-4 rounded-lg border-2 ">
          <p className="text-[#E7238B] text-xl font-bold">
            Services included in the package:
          </p>
          <div className="border-2">
            <div className="px-10 flex py-5 justify-around items-center">
              <div className="flex gap-2">
                <select
                  id="services"
                  name="services"
                  value={selectedService}
                  onChange={handleServiceChange}
                  className="p-2 rounded-lg border-2 text-lg"
                >
                  <option value="">Select a service</option>
                  {serviceOptions
                    .filter((option) => !displayedServices.includes(option)) // Filter out selected options
                    .map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                </select>
                <IconButton
                  onClick={addService}
                  color="primary"
                  aria-label="Add service"
                >
                  <AddIcon />
                </IconButton>
              </div>

              <div>
                <h3 className="font-bold text-lg">Selected Services:</h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  {displayedServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col p-4 rounded-lg border-2 ">
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
        </div> */}
        {/* <div className="flex flex-col p-4 rounded-lg border-2 ">
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
        </div> */}
        <div className="flex flex-col p-4 rounded-lg border-2 ">
          <p className="text-[#E7238B] text-xl font-bold">Cake:</p>
          <div className="w-[80%]">
            <label className="flex items-center justify-between">
              <p className="font-semibold">Peg theme for the cake:</p>
              <input
                className="font-normal border-2 p-2 rounded-md w-[50%]"
                type="string"
                placeholder="Enter Cake Theme"
              />
            </label>
          </div>
        </div>
        {/* <div className="flex flex-col p-4 rounded-lg border-2 ">
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
        </div> */}
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
