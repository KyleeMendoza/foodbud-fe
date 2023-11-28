import React from "react";
import EventStepper from "../../../components/EventStepper";
import Button from "@mui/material/Button";
import CelebrantDetails from "./createEventLayouts/CelebrantDetails";
import { postEditEvent } from "../../../services/postEditEvent";
import { getFetchEvent } from "../../../services/getFetchEvent";
import { useLocation } from "react-router-dom";

function ClientEditEvent() {
  const location = useLocation();
  const eventId = location.state.eventId;

  const [formData, setFormData] = React.useState({});

  const handleSave = () => {
    saveNewData();
  };

  const handleModify = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectorChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //FUNCTION THAT PUSHES THE CHANGES
  const saveNewData = async () => {
    try {
      const response = await postEditEvent(eventId, formData);
      console.log(response);
    } catch (error) {
      console.error("Error:", error.message);
      window.alert(
        "An error occurred while saving the event. Please try again later."
      );
    }
  };

  //FETCH EVENT
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFetchEvent(eventId);
        setFormData(response.fetchEvent);
        // console.log(response.fetchEvent);
      } catch (error) {
        console.error("Error:", error.message);
        window.alert(
          "An error occurred while fetching the bet history. Please try again later."
        );
      }
    };
    fetchData();
  }, [eventId]);

  //CONSOLE CHECKER
  React.useEffect(() => {
    console.log(formData);
  }, [formData]);

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
          <EventStepper
            formData={formData}
            handleModify={handleModify}
            handleSave={handleSave}
            handleSelectorChange={handleSelectorChange}
            eventId={eventId}
          />
        </div>
      </div>
    </div>
  );
}

export default ClientEditEvent;
