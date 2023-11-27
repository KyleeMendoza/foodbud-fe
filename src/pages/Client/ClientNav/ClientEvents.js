import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { getClientEvents } from "../../../services/getClientEvents";
import { Link as NavLink } from "react-router-dom";

function ClientEvents({ cookies }) {
  const clientId = cookies.username;
  const [events, setEvents] = useState([]);

  //GET EVENTS BASED ON CLIENT ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClientEvents(clientId);
        console.log(clientId);
        // console.log(response);

        // Checking if there are existing events
        if (response.events && response.events.length > 0) {
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
        } else {
          console.log("No events found for the given clientId.");
          setEvents([]);
          // You can handle the case when there are no events (e.g., display a message to the user).
        }
      } catch (error) {
        console.error("Error:", error.message);
        // window.alert(
        //   "An error occurred while fetching the bet history. Please try again later."
        // );
      }
    };

    fetchData();
  }, [clientId]);

  return (
    <div className=" h-full py-10 ">
      <div className="flex gap-5 ">
        {events.length === 0 ? (
          <>
            <div className="flex flex-col items-start justify-center gap-4">
              {/* <NavLink
                to="/client/createEvent"
                className="bg-[#E6479F] p-2 rounded-lg text-white font-semibold"
              >
                Create Event
              </NavLink> */}
              <p className="text-3xl text-white font-bold font-['Poppins']">
                You have no events yet.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-start justify-center gap-4">
              {/* <NavLink
                to="/client/createEvent"
                className="bg-[#E6479F] p-2 rounded-lg text-white font-semibold"
              >
                Create Event
              </NavLink> */}
              {events.map((events, key) => (
                <NavLink
                  className="flex flex-col w-72 h-72 rounded-2xl drop-shadow-lg"
                  key={key}
                  to="/client/myEvent"
                  state={{ eventId: events.eventID }}
                >
                  <div
                    className={`font-['Poppins'] flex justify-start items-start flex-1 pt-5 px-5 ${
                      key % 2 === 0 ? "bg-[#03A9F4]" : "bg-pink-500"
                    } rounded-t-2xl`}
                  >
                    <div
                      className={`bg-white px-4 py-3 rounded-3xl ${
                        key % 2 === 0 ? "text-[#03A9F4]" : "text-pink-500"
                      }`}
                    >
                      <p className="text-xs capitalize font-semibold">
                        {events.package_type}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-5 px-3 flex-1 bg-white rounded-b-2xl">
                    <div className="flex flex-col gap-2">
                      <p className="text-2xl font-bold capitalize">
                        {events.celebrant}
                      </p>
                      <p className="text-sm capitalize">{events.event_type}</p>
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
                </NavLink>
              ))}
            </div>
          </>
        )}
        {/* {events.map((events, key) => (
          <NavLink
            className="flex flex-col w-72 h-72 rounded-2xl drop-shadow-lg"
            key={key}
            to="/client/myEvent"
            state={{ eventId: events.eventID }}
          >
            <div
              className={`font-['Poppins'] flex justify-start items-start flex-1 pt-5 px-5 ${
                key % 2 === 0 ? "bg-[#03A9F4]" : "bg-pink-500"
              } rounded-t-2xl`}
            >
              <div
                className={`bg-white px-4 py-3 rounded-3xl ${
                  key % 2 === 0 ? "text-[#03A9F4]" : "text-pink-500"
                }`}
              >
                <p className="text-xs capitalize font-semibold">
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
          </NavLink>
        ))} */}
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
