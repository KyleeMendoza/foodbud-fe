import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { getClientEvents } from "../services/getClientEvents";
import AccountsTable from "./AccountsTable";
import Cookies from "js-cookie";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AccountsTab() {
  const [value, setValue] = React.useState(0);
  const [events, setEvents] = useState([]);
  const [selectedEventID, setSelectedEventID] = useState(null); // New state to store selected eventID
  const clientId = Cookies.get("username");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClientEvents(clientId);
        if (response.events && response.events.length > 0) {
          setEvents(response.events);
          setSelectedEventID(response.events[0].eventID);

        } else {
          console.log("No events found for the given clientId.");
          setEvents([]);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [clientId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (events[newValue]) {
      setSelectedEventID(events[newValue].eventID);
      // console.log(selectedEventID)
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="w-[32%] p-2 ml-6 bg-white rounded-lg see-through"
        >
          {events.map((event, index) => (
            <Tab key={index} label={`Event ${index + 1}`} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {events.map((event, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <AccountsTable key={selectedEventID} event_id={selectedEventID} />
        </CustomTabPanel>
      ))}
    </Box>
  );
}


