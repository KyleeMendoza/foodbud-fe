/* eslint-disable */
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { randomTraderName, randomEmail } from "@mui/x-data-grid-generator";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios"
// import { getTransactionTable } from "../services/getTransactionTable";

const columns = [
  { field: "id", headerName: "id", width: 100 },
  { field: "datetime", headerName: "Date & Time", width: 250 },
  { field: "description", headerName: "Details", width: 250 },
  { field: "service", headerName: "Service", width: 250 },
  { field: "status", headerName: "Status", width: 250 },
];

export default function AppointmentTable() {
  const emailFromCookies = Cookies.get("username")
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [""],
  });
  const [appointments, setAppointments] = React.useState([])

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});


  useEffect(() => {
    // Check if email is available in cookies
    if (emailFromCookies) {
      // Make Axios GET request
      axios.get(`https://3.27.163.46/api/show/appointments?email=${emailFromCookies}`)
        .then(response => {
          // Update state with the fetched appointments
          const currentDate = new Date();
          const appointmentsWithStatus = response.data.appointments.map((appointment, index) => {
            const appointmentDate = new Date(appointment.datetime);

            let status = "UPCOMING";
            if (appointmentDate < currentDate) {
              status = "DONE";
            } else if (appointmentDate.toDateString() === currentDate.toDateString()) {
              status = "ON GOING TODAY";
            }

            return {
              ...appointment,
              id: index + 1,
              status,
            };
          });

          setAppointments(appointmentsWithStatus);
        })
        .catch(error => {
          console.error('Error fetching appointments:', error);
        });
    }
  }, [emailFromCookies]);

  const dynamicColumns = columns.map(column => {
    return {
      ...column,
      valueGetter: (params) => params.row[column.field] || "",
    };
  });


  return (
    <>
      <div className="flex items-center justify-center rounded-2xl p-5 bg-white">
        <div className="w-full">
          <Box sx={{ width: 1 }}>

            <Box sx={{ height: "auto" }}>
              <DataGrid
                rows={appointments}
                columns={dynamicColumns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
              />
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
