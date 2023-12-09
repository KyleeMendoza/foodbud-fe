import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import packageBg from "../assets/packageBg.png";

//IMPORT IMG
// import packages from "../assets/Gender/BOY";

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
  const importAll = (context) => context.keys().map(context);

  //IMPORT PACKAGES for subfolder budgetPackage
  const packageImagesContext = require.context(
    "../assets/Packages/budgetPackage",
    false,
    /\.png$/
  );
  const packageImages = importAll(packageImagesContext);

  //IMPORT gender for subfolder boy
  const genderImagesContext = require.context(
    "../assets/Gender/boy",
    false,
    /\.png$/
  );
  const genderImages = importAll(genderImagesContext);

  //IMPORT typeOfEvents for subfolder Wedding
  const typeOfEventsImagesContext = require.context(
    "../assets/typeOfEvents/Wedding",
    false,
    /\.png$/
  );
  const typeOfEventsImages = importAll(typeOfEventsImagesContext);

  //IMPORT theme for subfolder unicorn
  const themeImagesContext = require.context(
    "../assets/theme/unicorn",
    false,
    /\.png$/
  );
  const themeImages = importAll(themeImagesContext);

  //IMPORT food
  const foodImagesContext = require.context("../assets/Food", false, /\.png$/);
  const foodImages = importAll(foodImagesContext);

  //IMPORT others for subfolder candyCorner
  const othersImagesContext = require.context(
    "../assets/others/candyCorner",
    false,
    /\.png$/
  );
  const othersImages = importAll(othersImagesContext);

  React.useEffect(() => {
    console.log(othersImages);
  }, [othersImages]);

  //ARRAY OF IMAGES
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
    <Box sx={{ width: "100%" }} className=" h-full">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="flex justify-center bg-green items-center"
      >
        <div className="overflow-x-auto">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Packages" {...a11yProps(0)} />
            <Tab label="Gender" {...a11yProps(1)} />
            <Tab label="Type of Event" {...a11yProps(2)} />
            <Tab label="Theme" {...a11yProps(3)} />
            <Tab label="Styling" {...a11yProps(5)} />
            <Tab label="Food" {...a11yProps(6)} />
            <Tab label="Others" {...a11yProps(7)} />
          </Tabs>
        </div>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        className="overflow-y-auto h-[40rem]"
      >
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
          {packageImages.map((packageBg, index) => (
            <div key={index} className="">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="grid grid-cols-4 gap-8">
          {genderImages.map((packageBg, index) => (
            <div key={index} className="">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className=" grid grid-cols-4 gap-8">
          {typeOfEventsImages.map((packageBg, index) => (
            <div key={index} className="">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className=" grid grid-cols-4 gap-8">
          {themeImages.map((packageBg, index) => (
            <div key={index} className="">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className=" grid grid-cols-4 gap-8">
          {packageBgArray.map((packageId, index) => (
            <div key={index} className="">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <div className=" grid grid-cols-4 gap-8">
          {packageBgArray.map((packageId, index) => (
            <div key={index} className="">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <div className=" grid grid-cols-4 gap-8">
          {foodImages.map((packageBg, index) => (
            <div key={index} className="">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <div className=" grid grid-cols-4 gap-8">
          {othersImages.map((packageBg, index) => (
            <div key={index} className="">
              <img src={packageBg} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
