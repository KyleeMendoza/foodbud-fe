import React from "react";
import EventsViewer from "../../../components/EventsViewer";

function ClientEventDetails() {
  return (
    <div className=" h-full py-10 ">
      <div className="flex gap-5 ">
        <EventsViewer />
      </div>
    </div>
  );
}

export default ClientEventDetails;
