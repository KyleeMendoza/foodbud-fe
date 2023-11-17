import React from "react";
import AppointmentTable from "../../../components/AppointmentTable";

function ClientAppointments() {
  return (
    <div className=" h-full py-10">
      <div className="flex flex-col gap-5 ">
        <div className="flex font-['Poppins']  w-[26rem] h-[4rem] rounded-2xl bg-white">
          <div className="flex items-center justify-center text-xl font-bold bg-white rounded-l-2xl capitalize flex-1 px-2 py-2">
            <p>juan dela cruz</p>
          </div>
          <div className="flex items-center justify-center text-xl capitalize flex-1 bg-[#03A9F4] text-white rounded-2xl px-2 py-2">
            <p>my appointments</p>
          </div>
        </div>
        <div>
          <AppointmentTable />
        </div>
      </div>
    </div>
  );
}

export default ClientAppointments;
