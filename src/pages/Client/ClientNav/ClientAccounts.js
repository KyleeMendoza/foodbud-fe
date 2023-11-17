import React from "react";
import AppointmentTable from "../../../components/AppointmentTable";
import AccountsTab from "../../../components/AccountsTab";

import Button from "@mui/material/Button";

function ClientAccounts() {
  return (
    <div className=" h-full py-10">
      <div className="flex flex-col gap-5 ">
        <div className="flex justify-between items-center gap-5  ">
          <div className="flex font-['Poppins']  w-[30rem] h-[4rem] rounded-2xl bg-white">
            <div className="flex items-center justify-center text-xl font-bold bg-white rounded-l-2xl capitalize flex-1 px-2 py-2">
              <p>celebrant's name</p>
            </div>
            <div className="flex items-center justify-center text-xl capitalize flex-1 bg-blue-200 rounded-2xl px-2 py-2">
              <p>December 25, 2023</p>
            </div>
          </div>
          <Button variant="contained" size="large">
            Add
          </Button>
          {/* <div>
          <AppointmentTable />
        </div> */}
        </div>
        <div>
          <AccountsTab />
        </div>
      </div>
    </div>
  );
}

export default ClientAccounts;
