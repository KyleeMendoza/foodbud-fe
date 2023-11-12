import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import packageBg from "../assets/packageBg.png";

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

export default function GalleryViewer() {
  const [value, setValue] = React.useState(0);

  const packageBgArray = [
    "packageBg1",
    "packageBg2",
    "packageBg3",
    "packageBg4",
    "packageBg5",
    "packageBg6",
    "packageBg7",
    "packageBg8",
    "packageBg9",
    "packageBg10",
    "packageBg11",
    "packageBg12",
    "packageBg13",
    "packageBg14",
    "packageBg15",
    "packageBg16",
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="border-2 border-red-600 h-full">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="flex justify-center items-center"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Packages" {...a11yProps(0)} />
          <Tab label="Gender" {...a11yProps(1)} />
          <Tab label="Type of Event" {...a11yProps(2)} />
          <Tab label="Theme" {...a11yProps(3)} />
          <Tab label="Color" {...a11yProps(4)} />
          <Tab label="Styling" {...a11yProps(5)} />
          <Tab label="Food" {...a11yProps(6)} />
          <Tab label="Others" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        className="border-2 border-green-600 "
      >
        <div className="border-2 border-red-600 grid grid-cols-4 gap-8">
          {packageBgArray.map((packageId, index) => (
            <div key={index} className="border-2 border-black">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="border-2 border-red-600 grid grid-cols-4 gap-8">
          {packageBgArray.map((packageId, index) => (
            <div key={index} className="border-2 border-black">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="border-2 border-red-600 grid grid-cols-4 gap-8">
          {packageBgArray.map((packageId, index) => (
            <div key={index} className="border-2 border-black">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="border-2 border-red-600 grid grid-cols-4 gap-8">
          {packageBgArray.map((packageId, index) => (
            <div key={index} className="border-2 border-black">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className="border-2 border-red-600 grid grid-cols-4 gap-8">
          {packageBgArray.map((packageId, index) => (
            <div key={index} className="border-2 border-black">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <div className="border-2 border-red-600 grid grid-cols-4 gap-8">
          {packageBgArray.map((packageId, index) => (
            <div key={index} className="border-2 border-black">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <div className="border-2 border-red-600 grid grid-cols-4 gap-8">
          {packageBgArray.map((packageId, index) => (
            <div key={index} className="border-2 border-black">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <div className="border-2 border-red-600 grid grid-cols-4 gap-8">
          {packageBgArray.map((packageId, index) => (
            <div key={index} className="border-2 border-black">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
