/* eslint-disable */
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { randomTraderName, randomEmail } from "@mui/x-data-grid-generator";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import NavBar from "./NavBar";
import { useEffect } from "react";
// import { getTransactionTable } from "../services/getTransactionTable";

const VISIBLE_FIELDS = [
  "event_id",
  "payment_description",
  "payment_paid",
  "payment_receipt",
  "createdAt",
];

const COLUMN_LABELS = {
  event_id: "Event ID",
  payment_description: "Payment Description",
  payment_paid: "Payment Paid",
  payment_receipt: "Payment Receipt",
  createdAt: "Date & Time",
};

// const columns = [
//   { field: "date", headerName: "Date & Time", width: 300 },
//   { field: "description", headerName: "Desciption", width: 500 },
//   { field: "services", headerName: "Services", width: 250 },
//   { field: "status", headerName: "Status", width: 250 },
//   { field: "action", headerName: "Action", width: 200 },
// ];

// const rows = [
//   {
//     id: 1,
//     date: "2023-11-13 10:30 AM",
//     description: "Meeting",
//     services: "Consultation",
//     status: "Pending",
//     action: "Edit",
//   },
//   {
//     id: 2,
//     date: "2023-11-14 02:00 PM",
//     description: "Appointment",
//     services: "Treatment",
//     status: "Completed",
//     action: "Delete",
//   },
//   {
//     id: 3,
//     date: "2023-11-15 09:00 AM",
//     description: "Checkup",
//     services: "Examination",
//     status: "Scheduled",
//     action: "View",
//   },
//   {
//     id: 4,
//     date: "2023-11-16 03:45 PM",
//     description: "Conference",
//     services: "Presentation",
//     status: "In Progress",
//     action: "Edit",
//   },
//   {
//     id: 5,
//     date: "2023-11-17 11:15 AM",
//     description: "Training",
//     services: "Workshop",
//     status: "Completed",
//     action: "Delete",
//   },
//   {
//     id: 6,
//     date: "2023-11-18 01:30 PM",
//     description: "Interview",
//     services: "Recruitment",
//     status: "Pending",
//     action: "View",
//   },
//   {
//     id: 7,
//     date: "2023-11-19 10:00 AM",
//     description: "Seminar",
//     services: "Education",
//     status: "Scheduled",
//     action: "Edit",
//   },
//   {
//     id: 8,
//     date: "2023-11-20 04:30 PM",
//     description: "Review",
//     services: "Feedback",
//     status: "In Progress",
//     action: "Delete",
//   },
//   {
//     id: 9,
//     date: "2023-11-21 02:45 PM",
//     description: "Product Launch",
//     services: "Marketing",
//     status: "Completed",
//     action: "View",
//   },
//   {
//     id: 10,
//     date: "2023-11-22 09:45 AM",
//     description: "Networking",
//     services: "Connection",
//     status: "Pending",
//     action: "Edit",
//   },
// ];

export default function AccountsTable() {
  const [data, setData] = useState([]);

  // Get all the payment
  const API_ENDPOINT = "http://localhost:9000/api/all/payments/:event_id";

  // Transaction tab
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        const filteredData = result.payments.filter(
          (row) => row.payment_paid !== null
        );
        // setData(result.clients)

        console.log(filteredData);

        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    ...VISIBLE_FIELDS.map((field) => ({
      field,
      headerClassName:
        "bg-secondary200 font-heading font-semibold text-title13",
      cellClassName: "text-title24",
      headerName: COLUMN_LABELS[field],
      flex: 1,
    })),
  ];

  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [""],
  });

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});
  //   const [data, setData] = React.useState([]);

  //   useEffect(() => {
  //     const getAllData = async () => {
  //       try {
  //         const { result } = await getTransactionTable();
  //         setData(result);
  //         // console.log(userList);
  //       } catch (error) {
  //         console.error("Error:", error.message);
  //         window.alert("An error occurred. Please try again later.");
  //       }
  //     };
  //     getAllData();
  //   }, []);

  return (
    <>
      <div className="flex items-center justify-center rounded-2xl p-5 bg-white">
        <div className="w-full">
          {/* <h1 className=" w-full text-3xl font-semibold text-center uppercase underline">
            transaction history table
          </h1> */}
          <Box sx={{ width: 1 }}>
            {/* <FormControlLabel
              checked={columnVisibilityModel.id !== false}
              onChange={(event) =>
                setColumnVisibilityModel(() => ({ id: event.target.checked }))
              }
              control={<Switch color="primary" size="large" />}
              label="Show ID column"
            />
            <FormControlLabel
              checked={filterModel.quickFilterExcludeHiddenColumns}
              onChange={(event) =>
                setFilterModel((model) => ({
                  ...model,
                  quickFilterExcludeHiddenColumns: event.target.checked,
                }))
              }
              control={<Switch color="primary" size="large" />}
              label="Exclude hidden columns"
            /> */}
            {/* Client Table */}
            <DataGrid
              className="text-lg"
              slots={{
                toolbar: GridToolbar,
              }}
              rows={data} // Pass the API data as rows
              columns={columns}
              getRowId={(row) => row.id}
              component={{ Toolbar: GridToolbar }}
            />

            {/* <Box sx={{ height: 700 }}>
              <DataGrid
                columns={columns}
                rows={rows}
                disableColumnFilter
                disableDensitySelector
                slots={{ toolbar: GridToolbar }}
                filterModel={filterModel}
                onFilterModelChange={(newModel) => setFilterModel(newModel)}
                slotProps={{ toolbar: { showQuickFilter: true } }}
                columnVisibilityModel={columnVisibilityModel}
                onColumnVisibilityModelChange={(newModel) =>
                  setColumnVisibilityModel(newModel)
                }
              />
            </Box> */}
          </Box>
        </div>
      </div>
    </>
  );
}
