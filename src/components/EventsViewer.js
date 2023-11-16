import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { postEditEvent } from "../services/postEditEvent";
import { useLocation } from "react-router-dom";
import { getFetchEvent } from "../services/getFetchEvent";

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

export default function EventsViewer() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const { eventId } = location.state; //index of the event clicked
  // console.log(eventId);
  const [editMode, setEditMode] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    saveNewData();
    // console.log(formData);
    // Handle saving data, e.g., sending it to the server
  };

  const handleModify = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //FUNCTION THAT PUSHES THE CHANGES
  const saveNewData = async () => {
    try {
      const response = await postEditEvent(eventId, formData);
      console.log(response);
    } catch (error) {
      console.error("Error:", error.message);
      window.alert(
        "An error occurred while saving the event. Please try again later."
      );
    }
  };

  //FETCH EVENT
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFetchEvent(eventId);
        setFormData(response.fetchEvent);
        // console.log(response.fetchEvent);
      } catch (error) {
        console.error("Error:", error.message);
        window.alert(
          "An error occurred while fetching the bet history. Please try again later."
        );
      }
    };
    fetchData();
  }, [eventId]);

  //CONSOLE CHECKER
  React.useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="border-red-600 border-2 bg-white rounded-xl w-[50%] p-2 ml-6 "
        >
          <Tab label="My Event" {...a11yProps(0)} />
          <Tab label="Invoice" {...a11yProps(1)} />
          <Tab label="Food Tasting" {...a11yProps(2)} />
          <Tab label="Online Meeting" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="border-2 border-red-600 p-5 bg-white rounded-xl">
          <div className="border-2 border-blue-600 flex justify-between font-['Poppins']">
            <p className="text-3xl font-bold text-[#3B9BDC]">Event Details</p>
            <Button variant="contained" onClick={handleEdit}>
              Edit
            </Button>
          </div>
          <div className="border-2 border-green-600 relative pb-20">
            <form className="border-2 border-blue-600 flex flex-col text-lg font-bold w-[50%] gap-2">
              <label className="flex justify-between items-center ">
                <p>Celebrant Name:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="celebrant_name"
                    value={formData.celebrant_name}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.celebrant_name}
                  </span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Age:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="number"
                    name="celebrant_age"
                    value={formData.celebrant_age || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.celebrant_age}
                  </span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Preparation Time:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="prep_time"
                    value={formData.prep_time || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.prep_time}</span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Start Time:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="start_time"
                    value={formData.start_time || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.start_time}</span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Event Type:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="event_type"
                    value={formData.event_type || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.event_type}</span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Theme:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="theme"
                    value={formData.theme || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.theme}</span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Color Theme:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="color_theme"
                    value={formData.color_theme || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.color_theme}
                  </span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Venue Time:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="venue_time"
                    value={formData.venue_time || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.venue_time}</span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Venue Type:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="venue_type"
                    value={formData.venue_type || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.venue_type}</span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Venue Floor:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="venue_floor"
                    value={formData.venue_floor || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.venue_floor}
                  </span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Venue Address:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="venue_address"
                    value={formData.venue_address || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.venue_address}
                  </span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Venue Location:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="venue_location"
                    value={formData.venue_location || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.venue_location}
                  </span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Dish 1:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="dish_1"
                    value={formData.dish_1 || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.dish_1}</span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Dish 2:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="dish_2"
                    value={formData.dish_2 || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.dish_2}</span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Pasta:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="pasta"
                    value={formData.pasta || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.pasta}</span>
                )}
              </label>

              <label className="flex justify-between items-center">
                <p>Dessert:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="dessert"
                    value={formData.dessert || ""}
                    onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.dessert}</span>
                )}
              </label>
            </form>
            <button
              onClick={handleSave}
              //   type="submit"
              className="font-bold text-xl bg-green-500 text-white px-5 py-3 rounded-md absolute bottom-0 right-0"
            >
              Submit
            </button>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
    </Box>
  );
}
