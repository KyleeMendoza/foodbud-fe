import React from "react";
import EventsViewer from "../../../components/EventsViewer";

function ClientEventDetails() {
  return (
    <div className="border-2 border-black h-full py-10 ">
      <div className="flex gap-5 border-2 border-green-600">
        <EventsViewer />
      </div>
    </div>
  );
}

export default ClientEventDetails;
