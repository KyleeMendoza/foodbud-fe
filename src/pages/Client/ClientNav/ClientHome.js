import React, { useState } from "react";
import Button from "@mui/material/Button";
import SelectButton from "../../../components/SelectButton";
import { useEffect } from "react";
import axios from "axios";
import { getFetchFT, getFetchMeeting } from "../../../services/getFetchEvent";
import { getInvoice } from "../../../services/getInvoice";

function ClientHome({ name }) {
  const EventID = localStorage.getItem("eventID");
  const [eventDetails, setEventDetails] = useState({});
  const [foodTastingDate, setFoodTastingDate] = useState("");
  const [onlineMeet, setOnlineMeet] = useState({});
  const [onlineMeetingDate, setOnlineMeetingDate] = useState("");
  const [invoiceData, setInvoiceData] = React.useState({});
  const [addsData, setAddsData] = React.useState([]);
  const [coverageData, setCoverageData] = React.useState([])

  useEffect(() => {
    if (!EventID) {
      return;
    }
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

  React.useEffect(() => {
    if (!EventID) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await getInvoice(EventID);
        // setFormData(response);
        setInvoiceData(response.packageRate);
        setAddsData(response.addonDetails);
      } catch (error) {
        console.error("Error:", error.message);
        window.alert("An error occurred. Please try again later.");
      }
    };
    fetchData();
  }, [EventID]);

  useEffect(() => {
    if (!EventID) {
      return;
    }
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
    if (!EventID) {
      return;
    }
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

  useEffect(() => {
    const fetchCoverage = async () => {
      try {
        if (!EventID) {
          return;
        }
        const response = await axios.get(`http://localhost:9000/api/fetch/coverage?event_id=${EventID}`);
        console.log(response.data)
        setCoverageData(response.data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchCoverage(); // Initial fetch when component mounts
  }, [EventID]);

  const eventDate = new Date(eventDetails.event_date);
  const onlineDate = new Date(onlineMeetingDate);

  const FtDate = new Date(foodTastingDate);

  const currentDate = new Date();
  const isUpcoming = currentDate < eventDate;

  const isUpcomingFT = currentDate < FtDate;

  const isUpcomingOL = currentDate < onlineDate;

  const total = addsData.reduce(
    (accumulator, addon) => accumulator + addon.addons_price,
    invoiceData.rate + 5000
  );

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
                <span>
                  {eventDetails.hc_kids ? `${eventDetails.hc_kids + eventDetails.hc_adults} pax` : ''}
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
                    IMPORTANT NOTICE: <br></br><span className="font-normal">{onlineMeet.notes}</span>
                  </p>

                  <p className="text-md capitalize text-black">
                    {onlineMeetingDate}
                  </p>

                </div>
              </div>
              <div className="flex items-center justify-center flex-1 border-t-2 border-white px-10">
                <p className="text-xl capitalize cursor-pointer" > <a href={onlineMeet.meeting_link}>Join Meeting</a> </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-5 text-white ">
          <div className=" flex-1 flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1  p-4 rounded-xl bg-white text-black font-bold">
                <p className="text-2xl text-blue-400 font-bold">
                  Quick Links
                </p>
                <div className="flex justify-between">
                  <p>Photo Coverage</p>
                  {coverageData && coverageData.find(data => data.coverage_type === 'Photo Coverage') ? (
                    <Button variant="contained" href={coverageData.find(data => data.coverage_type === 'Photo Coverage').link} target="_blank">
                      View
                    </Button>
                  ) : (
                    <Button variant="contained" disabled>
                      View
                    </Button>
                  )}
                </div>

                <div className="flex justify-between">
                  <p>Video Coverage</p>
                  {coverageData && coverageData.find(data => data.coverage_type === 'Video Coverage') ? (
                    <Button variant="contained" href={coverageData.find(data => data.coverage_type === 'Video Coverage').link} target="_blank">
                      View
                    </Button>
                  ) : (
                    <Button variant="contained" disabled>
                      View
                    </Button>
                  )}
                </div>

                <div className="flex justify-between">
                  <p>Photobooth</p>
                  {coverageData && coverageData.find(data => data.coverage_type === 'Photobooth') ? (
                    <Button variant="contained" href={coverageData.find(data => data.coverage_type === 'Photobooth').link} target="_blank">
                      View
                    </Button>
                  ) : (
                    <Button variant="contained" disabled>
                      View
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className=" bg-white rounded-xl p-5 relative flex flex-col gap-2 h-[13rem]">
              <div className="text-2xl text-black font-bold">
                How was the Event??
              </div>
              <div className="text-black">
                Share your event experience! We want to hear it from you. Your response will greatly help us to the improvement of Food Bud!
              </div>
              <div className="bg-[#3B9BDC] w-full absolute bottom-0 right-0 p-5 rounded-b-xl">
                <p className="font-bold text-center text-xl cursor-pointer">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdh726pmU0lLqKMJBjW7X9JTc-WqU0Je50U80Aw8obBw9uitA/viewform">Submit a Feedback</a>
                </p>
              </div>
            </div>
          </div>
          <div className=" flex-1">
            <div className="flex flex-col gap-2 h-full flex-1 p-8 rounded-xl bg-white text-black relative">
              <div className="h-[80%] ">
                <p className="text-2xl text-blue-400 font-bold">Accounts</p>
                <div className=" p-8 flex flex-col gap-4 bg-white rounded-3xl">

                  <div className=" relative pb-20 ">
                    {invoiceData.pax_count ? (
                      <>
                        <label className={`flex justify-between items-center `}>
                          <p className="font-bold text-lg">Reservation Fee</p>
                          <span className="font-normal p-1 text-lg">₱ 5000</span>
                        </label>
                        <label className={`flex justify-between items-center `}>
                          <p className="font-bold text-lg">{invoiceData.pax_count} Pax</p>
                          <span className="font-normal p-1 text-lg">
                            ₱ {invoiceData.rate}
                          </span>
                        </label>
                      </>
                    ) : (
                      <p>No invoice data available</p>
                    )}
                    {addsData.map((addon, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border-b-2 pt-2 pb-2"
                      >
                        <p className="font-bold text-lg">{addon.addons_name}</p>
                        <p className="font-normal text-lg mr-1">
                          ₱ {addon.addons_price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full bg-white border-t-2 border-black absolute bottom-0 left-0 p-8 rounded-b-xl">
                <p className="font-bold text-2xl text-end text-black">Total: {total || 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientHome;
