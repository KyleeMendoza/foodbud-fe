import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { getClientEvents } from "../../../services/getClientEvents";

function ClientEvents() {
  const clientId = "admin";
  const [events, setEvents] = useState([]);

  //GET EVENTS BASED ON CLIENT ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClientEvents(clientId);

        // Mapping the response to the state
        const mappedEvents = response.events.map((eventData) => ({
          eventID: eventData.eventID,
          celebrant: eventData.celebrant,
          event_date: eventData.event_date,
          event_type: eventData.event_type,
          package_type: eventData.package_type,
        }));

        // Setting the state with the mapped events
        setEvents(mappedEvents);

        console.log(response.events);
      } catch (error) {
        console.error("Error:", error.message);
        window.alert(
          "An error occurred while fetching the bet history. Please try again later."
        );
      }
    };
    fetchData();
  }, [clientId]);

  return (
    <div className="border-2 border-black h-screen py-10 ">
      <div className="flex gap-5 border-2 border-green-600">
        {events.map((events, key) => (
          <div className="flex flex-col w-72 h-72 rounded-2xl" key={key}>
            <div className="font-['Poppins'] flex justify-start items-start flex-1 pt-5 px-5 bg-sky-500 rounded-t-2xl">
              <div className="bg-blue-300 px-4 py-3 rounded-3xl">
                <p className="text-xs capitalize text-white font-semibold">
                  {events.package_type}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 px-3 flex-1 bg-white rounded-b-2xl">
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-bold capitalize">
                  {events.celebrant}
                </p>
                <p className="text-sm capitalize">{events.event_type}l</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm capitalize font-bold ">
                  {events.event_date}
                </p>
                <Button variant="contained" size="small">
                  Read more
                </Button>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="flex flex-col w-72 h-72 rounded-2xl">
          <div className="font-['Poppins'] flex justify-start items-start flex-1 pt-5 px-5 bg-pink-600 rounded-t-2xl">
            <div className="bg-pink-300 px-4 py-3 rounded-3xl">
              <p className="text-xs capitalize text-white font-semibold">
                budget package
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 px-3 flex-1 bg-white rounded-b-2xl">
            <div>
              <p className="text-2xl font-bold capitalize">juan dela cruz</p>
              <p className="text-sm capitalize">1st Birthday & Baptismal</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm capitalize">December 25, 2023</p>
              <Button variant="contained" size="small">
                Read more
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ClientEvents;
