import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  postEditEvent,
  postEditFoodForm,
  postEditMeetingForm,
} from "../services/postEditEvent";
import { useLocation } from "react-router-dom";
import {
  getFetchEvent,
  getFetchFT,
  getFetchMeeting,
} from "../services/getFetchEvent";
import { getInvoice } from "../services/getInvoice";
import { Link as NavLink } from "react-router-dom";

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
  const [foodFormData, setFoodFormData] = React.useState({});
  const [invoiceData, setInvoiceData] = React.useState({});
  const [meetingData, setMeetingData] = React.useState({});
  const [addsData, setAddsData] = React.useState([]);

  const dishOptions = [
    "Pork Cutlets with Creamy Sauce",
    "Pork Teriyaki",
    "Pork Caldereta",
    "Creamy Beef with Mushrooms",
    "Beef Broccoli",
    "Beef Stew",
    "Beef Stroganoff",
    "Beef Caldereta",
    "Chicken Teriyaki",
    "Chicken Finger with Tartar Sauce",
    "Chicken with Mushroom Sauce",
    "Cordon Bleu",
    "Fish Fillet Sweet & Sour",
    "Fish Fillet with Tausi",
    "Fish Fillet with Creamy Sauce",
    "Fish Fillet with Tartar Sauce",
    "Fish Fillet Sweet Corn Salsa",
    "Sipo Egg",
    "Chopsuey with Quail Eggs",
    "Buttered Vegetables",
  ];

  const pastaOptions = [
    "Carbonara",
    "Creamy Penne Pasta",
    "Spaghetti",
    "Spaghetti Macaroni",
    "Fettucini Alfredo",
    "Spaghetti with Bolognese Sauce",
    "Macaroni Marvel",
  ];

  const dessertOptions = [
    "Buko Pandan Salad",
    "Buko Mango Salad",
    "Coffee Jelly",
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  // const handleSave = () => {
  //   setEditMode(false);
  //   saveNewData();
  //   // console.log(formData);
  //   // Handle saving data, e.g., sending it to the server
  // };

  const handleSaveFoodForm = () => {
    setEditMode(false);
    saveFoodForm();
  };

  const handleSaveMeeting = () => {
    setEditMode(false);
    saveMeetingForm();
  };

  // const handleModify = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const handleModify2 = (e) => {
    const { name, value } = e.target;
    setFoodFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleModify3 = (e) => {
    const { name, value } = e.target;
    setMeetingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //FUNCTION THAT PUSHES THE CHANGES
  // const saveNewData = async () => {
  //   try {
  //     const response = await postEditEvent(eventId, formData);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //     window.alert(
  //       "An error occurred while saving the event. Please try again later."
  //     );
  //   }
  // };

  const saveFoodForm = async () => {
    try {
      const response = await postEditFoodForm(eventId, foodFormData);
      console.log(response);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const saveMeetingForm = async () => {
    try {
      const response = await postEditMeetingForm(eventId, meetingData);
      console.log(response);
    } catch (error) {
      console.error("Error:", error.message);
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

  // FETCH FOOD FORM
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFetchFT(eventId);
        setFoodFormData(response.fetchFT);
        // console.log(response.fetchFT)
      } catch (error) {
        console.error("Error:", error.message);
        window.alert("An error occurred. Please try again later.");
      }
    };
    fetchData();
  }, [eventId]);

  // FETCH MEETING FORM
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFetchMeeting(eventId);
        setMeetingData(response.FetchMeeting);
      } catch (error) {
        console.error("Error:", error.message);
        window.alert("An error occurred. Please try again later.");
      }
    };
    fetchData();
  }, [eventId]);

  // FETCH INVOICE
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getInvoice(eventId);
        // setFormData(response);
        setInvoiceData(response.packageRate);
        setAddsData(response.addonDetails);
      } catch (error) {
        console.error("Error:", error.message);
        window.alert("An error occurred. Please try again later.");
      }
    };
    fetchData();
  }, [eventId]);

  // //CONSOLE CHECKER
  // React.useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  const handleJoin = () => {
    // Redirect to the meeting link when the button is clicked
    window.location.href = meetingData.meeting_link;
  };

  const total = addsData.reduce(
    (accumulator, addon) => accumulator + addon.addons_price,
    invoiceData.rate + 5000
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className=" bg-white rounded-3xl w-[40%] p-2 ml-6 "
        >
          <Tab label="My Event" {...a11yProps(0)} />
          <Tab label="Invoice" {...a11yProps(1)} />
          <Tab label="Food Tasting" {...a11yProps(2)} />
          <Tab label="Online Meeting" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className=" p-8 flex flex-col gap-4 bg-white rounded-3xl">
          <div className=" flex justify-between font-['Poppins']">
            <p className="text-3xl font-bold text-[#E7238B]">Event Details</p>
            {/* <Button
              variant="contained"
              onClick={handleEdit}
              style={{ backgroundColor: "#E7238B" }}
            >
              {editMode ? "cancel" : "edit"}
            </Button> */}
            <NavLink
              to="/client/editEvent"
              state={{ eventId }}
              className="bg-[#E7238B] rounded-md py-2 px-4 text-white font-semibold"
            >
              Edit
            </NavLink>
          </div>
          <div className=" relative pb-20 ">
            <form className=" flex flex-col text-lg font-bold w-[50%] gap-2 ">
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Celebrant Name:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="celebrant_name"
                    value={formData.celebrant_name}
                    // onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1 ">
                    {formData.celebrant_name}
                  </span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Age:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="number"
                    name="celebrant_age"
                    value={formData.celebrant_age || ""}
                    // onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.celebrant_age}
                  </span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                }`}
              >
                <p>Preparation Time:</p>
                {editMode ? (
                  <select
                    className="font-normal border-2 p-1"
                    name="prep_time"
                    value={formData.prep_time || ""}
                    // disabled={formData.start_time === formData.prep_time}
                    // onChange={handleModify}
                  >
                    {Array.from({ length: 24 }, (_, index) => {
                      const hours = index % 12 || 12; // Convert 0 to 12
                      const period = index < 12 ? "AM" : "PM";
                      const formattedTime = `${hours}:00:00 ${period}`;
                      return (
                        <option key={index} value={formattedTime}>
                          {formattedTime}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <span className="font-normal p-1">{formData.prep_time}</span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                }`}
              >
                <p>Start Time:</p>
                {editMode ? (
                  <select
                    className="font-normal border-2 p-1"
                    name="start_time"
                    value={formData.start_time || ""}
                    // onChange={handleModify}
                    // disabled={formData.start_time === formData.prep_time}
                  >
                    {Array.from({ length: 24 }, (_, index) => {
                      const hours = index % 12 || 12; // Convert 0 to 12
                      const period = index < 12 ? "AM" : "PM";
                      const formattedTime = `${hours}:00:00 ${period}`;
                      const isDisabled = formData.prep_time >= formattedTime;
                      return (
                        <option
                          key={index}
                          value={formattedTime}
                          disabled={isDisabled}
                        >
                          {formattedTime}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <span className="font-normal p-1">{formData.start_time}</span>
                )}
              </label>
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Event Type:</p>
                {editMode ? (
                  <select
                    className="font-normal border-2 p-1"
                    name="event_type"
                    value={formData.event_type || ""}
                    // onChange={handleModify}
                  >
                    <option value="">Select Event Type</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Christening">Christening</option>
                    <option value="Conference">Conference</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Debut">Debut</option>
                    <option value="Wedding">Wedding</option>
                  </select>
                ) : (
                  <span className="font-normal p-1">{formData.event_type}</span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Theme:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="theme"
                    value={formData.theme || ""}
                    // onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.theme}</span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Color Theme:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="color_theme"
                    value={formData.color_theme || ""}
                    // onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.color_theme}
                  </span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Venue Time:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="venue_time"
                    value={formData.venue_time || ""}
                    // onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.venue_time}</span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Venue Type:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="venue_type"
                    value={formData.venue_type || ""}
                    // onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">{formData.venue_type}</span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Venue Floor:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="venue_floor"
                    value={formData.venue_floor || ""}
                    // onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.venue_floor}
                  </span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Venue Address:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="venue_address"
                    value={formData.venue_address || ""}
                    // onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.venue_address}
                  </span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Venue Location:</p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="venue_location"
                    value={formData.venue_location || ""}
                    // onChange={handleModify}
                  />
                ) : (
                  <span className="font-normal p-1">
                    {formData.venue_location}
                  </span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Dish 1:</p>
                {editMode ? (
                  <select
                    className="font-normal border-2 p-1"
                    name="dish_1"
                    value={formData.dish_1 || ""}
                    // onChange={handleModify}
                  >
                    <option value="">Select Dish</option>
                    {dishOptions.map((dish, index) => (
                      <option
                        key={index}
                        value={dish}
                        disabled={formData.dish_2 === dish}
                      >
                        {dish}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span className="font-normal p-1">{formData.dish_1}</span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Dish 2:</p>
                {editMode ? (
                  <select
                    className="font-normal border-2 p-1"
                    name="dish_2"
                    value={formData.dish_2 || ""}
                    // onChange={handleModify}
                  >
                    <option value="">Select Dish</option>
                    {dishOptions.map((dish, index) => (
                      <option
                        key={index}
                        value={dish}
                        disabled={formData.dish_1 === dish}
                      >
                        {dish}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span className="font-normal p-1">{formData.dish_2}</span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Pasta:</p>
                {editMode ? (
                  <select
                    className="font-normal border-2 p-1"
                    name="pasta"
                    value={formData.pasta || ""}
                    // onChange={handleModify}
                  >
                    <option value="">Select Pasta</option>
                    {pastaOptions.map((pasta, index) => (
                      <option key={index} value={pasta}>
                        {pasta}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span className="font-normal p-1">{formData.pasta}</span>
                )}
              </label>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Dessert:</p>
                {editMode ? (
                  <select
                    className="font-normal border-2 p-1"
                    type="text"
                    name="dessert"
                    value={formData.dessert || ""}
                    // onChange={handleModify}
                  >
                    <option value="">Select Dessert</option>
                    {dessertOptions.map((dessert, index) => (
                      <option key={index} value={dessert}>
                        {dessert}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span className="font-normal p-1">{formData.dessert}</span>
                )}
              </label>
            </form>
            {/* <button
              // onClick={handleSave}
              style={{ backgroundColor: ["#3B9BDC"] }}
              className="font-bold text-xl  text-white px-5 py-3 rounded-md absolute bottom-0 right-0"
            >
              Submit
            </button> */}
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className=" p-8 flex flex-col gap-4 bg-white rounded-3xl">
          <div className=" flex justify-between font-['Poppins']">
            <p className="text-3xl font-bold text-[#E7238B]">Invoice</p>
            <Button variant="contained" style={{ backgroundColor: "#E7238B" }}>
              PRINT
            </Button>
          </div>
          <div className=" relative pb-20 ">
            <strong>
              <h1 className="text-2xl">{invoiceData.package_name}</h1>
            </strong>
            <p className="text-lg">
              Note: This is just an initial overview or estimation of your
              payment, any changes regarding the payment will inform to you by
              admin.{" "}
            </p>
            <br></br>

            <label
              className={`flex justify-between items-center ${
                editMode ? "" : "border-b-2"
              } `}
            >
              <p className="font-bold text-lg">Reservation Fee</p>
              {editMode ? (
                <input
                  className="font-normal border-2 p-1"
                  type="text"
                  name="fee"
                  value={5000}
                />
              ) : (
                <span className="font-normal p-1 text-lg">₱ 5000</span>
              )}
            </label>
            <label
              className={`flex justify-between items-center ${
                editMode ? "" : "border-b-2"
              } `}
            >
              <p className="font-bold text-lg">{invoiceData.pax_count} Pax</p>
              {editMode ? (
                <input
                  className="font-normal border-2 p-1 "
                  type="text"
                  name="fee"
                  value={invoiceData.rate}
                />
              ) : (
                <span className="font-normal p-1 text-lg">
                  ₱ {invoiceData.rate}
                </span>
              )}
            </label>
            {addsData.map((addon, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b-2 pt-2 pb-2"
              >
                <p className="font-bold text-lg">{addon.addons_name}</p>
                <p className="font-normal text-lg mr-1">
                  ₱ {addon.addons_price}
                </p>
              </div>
            ))}
            <br></br>
            <br></br>
            <label
              className={`flex justify-between items-center ${
                editMode ? "" : "border-b-2"
              } `}
            >
              <p className="font-bold text-2xl"> Total</p>

              <span className="font-bold p-1 text-2xl">₱ {total}</span>
            </label>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className=" p-8 flex flex-col gap-4 bg-white rounded-3xl">
          <div className=" flex justify-between font-['Poppins']">
            <p className="text-3xl font-bold text-[#E7238B]">Food Tasting</p>
            <Button
              variant="contained"
              onClick={handleEdit}
              style={{ backgroundColor: "#E7238B" }}
            >
              {editMode ? "cancel" : "edit"}
            </Button>
          </div>
          <div className=" relative pb-20 ">
            <ul className="list-disc">
              <li className="ml-8">
                <strong>
                  Delivery via Lalamove (delivery fee will be shouldered by the
                  client)
                </strong>
              </li>
              <li className="ml-8">
                <strong>FREE food tasting only ( MAX 3 DISH )</strong>
              </li>
              <li className="ml-8">
                <strong>P200 per dish for more than 3 dish</strong>
              </li>
            </ul>
            <br></br>
            <br></br>

            <form className=" flex flex-col text-lg font-bold w-[50%] gap-2 ">
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Date: </p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="date"
                    value={foodFormData.date}
                    onChange={handleModify2}
                  />
                ) : (
                  <span className="font-normal p-1 ">{foodFormData.date}</span>
                )}
              </label>
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Time: </p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="time"
                    value={foodFormData.time}
                    onChange={handleModify2}
                  />
                ) : (
                  <span className="font-normal p-1 ">{foodFormData.time}</span>
                )}
              </label>
              <br></br>
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Recipient Name: </p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="name"
                    value={foodFormData.name}
                    onChange={handleModify2}
                  />
                ) : (
                  <span className="font-normal p-1 ">{foodFormData.name}</span>
                )}
              </label>
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Contact Number: </p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="contact"
                    value={foodFormData.contact}
                    onChange={handleModify2}
                  />
                ) : (
                  <span className="font-normal p-1 ">
                    {foodFormData.contact}
                  </span>
                )}
              </label>
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Address: </p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="address"
                    value={foodFormData.address}
                    onChange={handleModify2}
                  />
                ) : (
                  <span className="font-normal p-1 ">
                    {foodFormData.address}
                  </span>
                )}
              </label>
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Google Pin Location: </p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="google_pin"
                    value={foodFormData.google_pin}
                    onChange={handleModify2}
                  />
                ) : (
                  <span className="font-normal p-1 ">
                    {foodFormData.google_pin}
                  </span>
                )}
              </label>
              <br></br>

              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Dishes </p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="dish"
                    value={foodFormData.dish}
                    onChange={handleModify2}
                  />
                ) : (
                  <span className="font-normal p-1 ">{foodFormData.dish}</span>
                )}
              </label>
            </form>
            {editMode && (
              <button
                onClick={handleSaveFoodForm}
                type="submit"
                style={{ backgroundColor: ["#3B9BDC"] }}
                className="font-bold text-xl text-white px-5 py-3 rounded-md absolute bottom-0 right-0"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className=" p-8 flex flex-col gap-4 bg-white rounded-3xl">
          <div className=" flex justify-between font-['Poppins']">
            <p className="text-3xl font-bold text-[#E7238B]">Online Meeting</p>
            <div>
              <Button
                variant="contained"
                onClick={handleEdit}
                style={{ marginRight: "10px", backgroundColor: "#E7238B" }}
              >
                {editMode ? "cancel" : "edit"}
              </Button>
              <Button
                variant="contained"
                onClick={handleJoin}
                style={{ backgroundColor: "#E7238B" }}
              >
                Join Meeting
              </Button>
            </div>
          </div>
          <div className=" relative pb-20 ">
            <form className=" flex flex-col text-lg font-bold w-[50%] gap-2 ">
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Date: </p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="date"
                    value={meetingData.date}
                    onChange={handleModify3}
                  />
                ) : (
                  <span className="font-normal p-1 ">{meetingData.date}</span>
                )}
              </label>
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Time: </p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1"
                    type="text"
                    name="time"
                    value={meetingData.time}
                    onChange={handleModify3}
                  />
                ) : (
                  <span className="font-normal p-1 ">{meetingData.time}</span>
                )}
              </label>
              <label
                className={`flex justify-between items-center ${
                  editMode ? "" : "border-b-2"
                } `}
              >
                <p>Notes: </p>
                {editMode ? (
                  <input
                    className="font-normal border-2 p-1 w-auto"
                    type="text"
                    name="notes"
                    value={meetingData.notes}
                    onChange={handleModify3}
                  />
                ) : (
                  <span className="font-normal p-1 ">{meetingData.notes}</span>
                )}
              </label>
            </form>
            <br></br>
            <br></br>
            <ul className="list-disc">
              <li className="ml-8">
                <strong>
                  Complete and send all needed information in{" "}
                  <span className="text-[#E7238B]">RESERVATION FORM</span>.
                </strong>
              </li>
              <li className="ml-8">
                <strong>
                  List down all of your questions so we can discuss them
                  efficiently without dead air.
                </strong>
              </li>
              <li className="ml-8">
                <strong>
                  Take time to read the{" "}
                  <span className="text-[#E7238B]">terms and conditions</span>{" "}
                  and <span>important disclaimers</span> before the meeting
                  starts.
                </strong>
              </li>
              <li className="ml-8">
                <strong>Send in the pictures and videos of the venue.</strong>
              </li>
              <li className="ml-8">
                <strong>Share the Google pin location of the venue.</strong>
              </li>
            </ul>
            <br></br>
            <p className="font-extrabold text-[#E7238B]">MEETING OUTLINE</p>
            <ul className="list-disc">
              <li className="ml-8">
                <strong>Quick Recall of inclusions.</strong>
              </li>
              <li className="ml-8">
                <strong>Discussion of terms and disclaimers</strong>
              </li>
              <li className="ml-8">
                <strong>Quick Discussion of event details</strong>
              </li>
              <li className="ml-8">
                <strong>Answering concern/questions of client</strong>
              </li>
              <li className="ml-8">
                <strong>End of meeting</strong>
              </li>
            </ul>
            <br></br>

            <p className="font-extrabold text-[#E7238B]">CONTRACT SIGNING</p>

            <ul className="list-disc">
              <li className="ml-8">
                <strong>
                  We will send the contract after the Zoom meeting within the
                  day.
                </strong>
              </li>
              <li className="ml-8">
                <strong>Once you receive the contract, please:</strong>
                <ul className="list-disc">
                  <li className="ml-8">
                    Send the signed contract ASAP via{" "}
                    <span className="text-[#E7238B]">email</span> or{" "}
                    <span className="text-[#E7238B]">chat</span>.
                  </li>
                  <li className="ml-8">
                    Reply with your full name and contact number as your
                    electronic signature.
                  </li>
                </ul>
              </li>
            </ul>
            {editMode && (
              <button
                onClick={handleSaveMeeting}
                type="submit"
                style={{ backgroundColor: ["#3B9BDC"] }}
                className="font-bold text-xl text-white px-5 py-3 rounded-md absolute bottom-0 right-0"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
