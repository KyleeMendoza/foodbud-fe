import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Cookies from "js-cookie";

export default function SelectButton() {
  const [eventIds, setEventIds] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState("");
  const clientName = Cookies.get("username");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://3.27.163.46/api/get/event/id?client_email=${clientName}`,
          {
            params: {
              client_email: clientName,
            },
          }
        );
        setEventIds(response.data.map((item) => item.event_id));
        console.log(response.data.map((item) => item.event_id));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [clientName]);

  const handleSelectChange = (event) => {
    setSelectedEventId(event.target.value);
    localStorage.setItem("eventID", event.target.value);
    window.location.reload();
  };

  return (
    <Box sx={{ minWidth: 120 }} className="bg-white rounded-md text-black">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Event #</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedEventId}
          onChange={handleSelectChange}
        >
          {eventIds.map((eventId) => (
            <MenuItem key={eventId} value={eventId}>
              {eventId}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
