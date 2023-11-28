import React, { useState } from "react";
import Button from "@mui/material/Button";
import SelectButton from "../../../components/SelectButton";
import { useEffect } from "react";
import axios from "axios";
import { getFetchFT, getFetchMeeting } from "../../../services/getFetchEvent";

function ClientHome({ name }) {
  const EventID = localStorage.getItem("eventID");
  const [eventDetails, setEventDetails] = useState({});
  const [foodTastingDate, setFoodTastingDate] = useState("");
  const [onlineMeet, setOnlineMeet] = useState({});
  const [onlineMeetingDate, setOnlineMeetingDate] = useState("");

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `https://3.27.163.46/api/event/dashboard?eventID=${EventID}`,
          {
            params: {
              eventID: EventID,
            },
          }
        );

        setEventDetails(response.data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    if (EventID) {
      fetchEventDetails();
    }
  }, [EventID]);

  useEffect(() => {
    if (EventID) {
      const fetchData = async () => {
        try {
          const response = await getFetchFT(EventID);
          setFoodTastingDate(response.fetchFT.date);
          console.log(response.fetchFT);
        } catch (error) {
          console.error("Error:", error.message);
          window.alert(
            "An error occurred while fetching. Please try again later."
          );
        }
      };
      fetchData();
    }
  }, [EventID]);

  useEffect(() => {
    if (EventID) {
      const fetchData = async () => {
        try {
          const response = await getFetchMeeting(EventID);
          setOnlineMeetingDate(response.FetchMeeting.date);

          setOnlineMeet(response.FetchMeeting);
          console.log(response.FetchMeeting);
        } catch (error) {
          console.error("Error:", error.message);
          window.alert(
            "An error occurred while fetching. Please try again later."
          );
        }
      };
      fetchData();
    }
  }, [EventID]);

  const eventDate = new Date(eventDetails.event_date);
  const onlineDate = new Date(onlineMeetingDate);

  const FtDate = new Date(foodTastingDate);

  const currentDate = new Date();
  const isUpcoming = currentDate < eventDate;

  const isUpcomingFT = currentDate < FtDate;

  const isUpcomingOL = currentDate < onlineDate;

  return (
    <div className="h-full py-10">
      <div className="flex flex-col gap-5  font-['Poppins']">
        <div className="flex justify-between items-center w-full ">
          <div className="flex flex-col gap-2 text-white">
            <p className="text-2xl font-bold capitalize ">Welcome back,</p>
            <p className="text-5xl font-bold capitalize ">{name}!</p>
          </div>
          <div>
            <SelectButton />
          </div>
        </div>
        <div className="flex gap-5 text-white">
          <div className="flex flex-col justify-between h-[13rem] flex-1 rounded-xl bg-gradient-to-r from-slate-500">
            {EventID && (
              <div className="flex flex-col gap-2 h-[65%] p-10 ">
                <p className="text-3xl font-bold capitalize ">
                  {eventDetails.event_date}
                </p>
                <p className="text-xl capitalize ">
                  {eventDetails.celebrant_name}, {eventDetails.package_type},{" "}
                  {eventDetails.hc_kids + eventDetails.hc_adults} pax,{" "}
                  {eventDetails.theme}
                </p>
              </div>
            )}
            <div className="flex items-center flex-1 border-t-2 border-white px-10">
              {EventID && (
                <p className="text-2xl font-bold capitalize">
                  {" "}
                  {isUpcoming ? "UPCOMING" : "DONE "}
                </p>
              )}
            </div>
          </div>
          <div className="flex-1 flex gap-5 ">
            <div className="flex flex-col justify-between h-[13rem] flex-1 rounded-xl bg-gradient-to-r from-pink-500">
              <div className="flex flex-col gap-2 h-[65%] p-10">
                <p className="text-md capitalize ">Food Tasting</p>
                <p className="text-3xl font-bold capitalize ">
                  {foodTastingDate}
                </p>
              </div>
              <div className="flex items-center flex-1 border-t-2 border-white px-10">
                {EventID && (
                  <p className="text-xl capitalize">
                    {" "}
                    {isUpcomingFT ? "UPCOMING" : "COMPLETED "}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between h-[13rem] flex-1 rounded-xl bg-gradient-to-r from-blue-500">
              <div className="flex flex-col gap-2 h-[65%] p-10">
                <p className="text-md capitalize ">Online Meeting</p>
                <p className="text-3xl font-bold capitalize ">
                  {onlineMeetingDate}
                </p>
              </div>
              <div className="flex items-center flex-1 border-t-2 border-white px-10">
                <p className="text-xl capitalize ">
                  {EventID && (
                    <p className="text-2xl font-bold capitalize">
                      {" "}
                      {isUpcomingOL ? "UPCOMING" : "COMPLETED "}
                    </p>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-5 text-white ">
          <div className="flex flex-col gap-3  flex-1 bg-white rounded-xl">
            <div className=" flex justify-between items-center mx-5 mt-5">
              <p className="text-2xl text-blue-400 font-bold">Event Details</p>
              <Button variant="contained">view</Button>
            </div>
            <div className="font-semibold text-black flex flex-col mx-5 mb-5">
              <p>
                Celebrant Name:{" "}
                <span className="text-red-400">
                  {eventDetails.celebrant_name}
                </span>
              </p>
              <p>
                Event Date:{" "}
                <span className="text-red-400"> {eventDetails.event_date}</span>
              </p>
              <p>
                Start Time:{" "}
                <span className="text-red-400">{eventDetails.start_time}</span>
              </p>
              <p>
                Type of Event:{" "}
                <span className="text-red-400">{eventDetails.event_type} </span>
              </p>
              <p>
                Theme of Event:{" "}
                <span className="text-red-400">{eventDetails.theme}</span>
              </p>
              <p>
                Venue:{" "}
                <span className="text-red-400">{eventDetails.venue}</span>
              </p>
              <p>
                Total Headcount:{" "}
                <span className="text-red-400">
                  {eventDetails.hc_kids + eventDetails.hc_adults} pax{" "}
                </span>
              </p>
            </div>
          </div>
          <div className=" flex-1 rounded-xl">
            <div className="flex flex-col justify-between h-full flex-1 rounded-xl  bg-[#3B9BDC]">
              <div className="flex flex-col gap-2 h-[75%] p-5 rounded-t-xl bg-white">
                <p className="text-2xl text-blue-400 font-bold ">
                  Meeting Details
                </p>
                <div className="flex flex-col font-bold">
                  <p className="text-md capitalize text-black">
                    {onlineMeet.notes}
                  </p>
                  <p className="text-md capitalize text-black">
                    Deluxe Package
                  </p>
                  <p className="text-md capitalize text-black">
                    Deluxe Package
                  </p>
                  <p className="text-md capitalize text-black">
                    Deluxe Package
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center flex-1 border-t-2 border-white px-10">
                <p className="text-xl capitalize ">Join Meeting</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-5 text-white ">
          <div className=" flex-1 flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1  p-4 rounded-xl bg-white text-black font-bold">
                <p className="text-2xl text-blue-400 font-bold">
                  Event Details
                </p>
                <div className="flex justify-between">
                  <p>Photo Coverage</p>
                  <Button variant="contained">view</Button>
                </div>
                <div className="flex justify-between">
                  <p>Photo Coverage</p>
                  <Button variant="contained">view</Button>
                </div>
                <div className="flex justify-between">
                  <p>Photo Coverage</p>
                  <Button variant="contained">view</Button>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1  p-4 rounded-xl bg-white text-black relative">
                <div className="h-[80%] ">
                  <p className="text-2xl text-blue-400 font-bold">Accounts</p>
                  <div className="flex flex-col justify-between h-[80%] font-bold">
                    <div className="flex justify-between">
                      <p>Total Availed</p>
                      <p>xxxxx</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <p>Total Availed</p>
                        <p>xxxxx</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Total Availed</p>
                        <p>xxxxx</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-primary-400 absolute bottom-0 left-0 py-2">
                  <p className="font-bold text-center text-white">
                    Add Payment
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-white rounded-xl p-5 relative flex flex-col gap-2 h-[13rem]">
              <div className="text-2xl text-black font-bold">
                How was the Event??
              </div>
              <div className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                est sunt quas sint qui cum. Corporis eius eos mollitia
                reiciendis.
              </div>
              <div className="bg-[#3B9BDC] w-full absolute bottom-0 right-0 p-5 rounded-b-xl">
                <p className="font-bold text-center text-xl">
                  Submit a Feedback
                </p>
              </div>
            </div>
          </div>
          <div className=" flex-1">
            <div className="flex flex-col gap-2 h-full flex-1 p-8 rounded-xl bg-white text-black relative">
              <div className="h-[80%] ">
                <p className="text-2xl text-blue-400 font-bold">Accounts</p>
                <div className="flex flex-col justify-between h-[80%] font-bold">
                  <div className="flex justify-between">
                    <p>Total Availed</p>
                    <p>xxxxx</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p>Total Availed</p>
                      <p>xxxxx</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Total Availed</p>
                      <p>xxxxx</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Total Availed</p>
                      <p>xxxxx</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Total Availed</p>
                      <p>xxxxx</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Total Availed</p>
                      <p>xxxxx</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Total Availed</p>
                      <p>xxxxx</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Total Availed</p>
                      <p>xxxxx</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white border-t-2 border-black absolute bottom-0 left-0 p-8 rounded-b-xl">
                <p className="font-bold text-end text-black">Total: P93,200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientHome;
