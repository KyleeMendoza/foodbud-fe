import * as React from "react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import TuneIcon from "@mui/icons-material/Tune";

export default function GalleryListSort({
  handleGalleryType,
  handleCelebrantGender,
  handleEventType,
}) {
  const [openPackages, setOpenPackages] = React.useState(false);
  const [openGender, setOpenGender] = React.useState(false);
  const [openToe, setOpenToe] = React.useState(false);
  const [openTheme, setOpenTheme] = React.useState(false);
  const [openColor, setOpenColor] = React.useState(false);
  const [openStyling, setOpenStyling] = React.useState(false);
  const [openFood, setOpenFood] = React.useState(false);
  const [openOthers, setOpenOthers] = React.useState(false);

  const handleClickPackages = () => {
    setOpenPackages(!openPackages);
  };
  const handleClickGender = () => {
    setOpenGender(!openGender);
  };
  const handleClickToe = () => {
    setOpenToe(!openToe);
  };
  const handleClickTheme = () => {
    setOpenTheme(!openTheme);
  };
  const handleClickColor = () => {
    setOpenColor(!openColor);
  };
  const handleClickStyling = () => {
    setOpenStyling(!openStyling);
  };
  const handleClickFood = () => {
    setOpenFood(!openFood);
  };
  const handleClickOthers = () => {
    setOpenOthers(!openOthers);
  };

  const packagesArray = [
    "Budget Package",
    "Deluxe Package",
    "Deluxe Debut Package",
    "Diamond Package",
    "Luxury Package",
  ];
  const genderArray = ["Male", "Female", "None"];
  const typeOfEventArray = [
    "Baptismal",
    "Kids Party",
    "Adult Party",
    "Debut",
    "Corporate",
  ];
  const themeArray = []; //"Bear", "Avengers"
  const colorArray = []; //"Blue", "Pink"
  const stylingArray = []; //"Styling1", "Styling2"
  const foodArray = []; //"Meat", "Fish"
  const othersArray = []; //"Others1", "Others2"

  return (
    <List
      sx={{
        width: 300,
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filter
          {/* <TuneIcon /> */}
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickPackages}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Packages" />
        {openPackages ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {packagesArray.map((item, index) => (
        <Collapse in={openPackages} timeout="auto" unmountOnExit key={index}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  onChange={() => {
                    handleGalleryType(item);
                  }}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": index.toString() }}
                />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
      <ListItemButton onClick={handleClickGender}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Gender" />
        {openGender ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {genderArray.map((item, index) => (
        <Collapse in={openGender} timeout="auto" unmountOnExit key={index}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  onChange={() => {
                    handleCelebrantGender(item);
                  }}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": index.toString() }}
                />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
      <ListItemButton onClick={handleClickToe}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Type of Event" />
        {openToe ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {typeOfEventArray.map((item, index) => (
        <Collapse in={openToe} timeout="auto" unmountOnExit key={index}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  onChange={() => {
                    handleEventType(item);
                  }}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": index.toString() }}
                />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
      <ListItemButton onClick={handleClickTheme}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Theme" />
        {openTheme ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {themeArray.map((item, index) => (
        <Collapse in={openTheme} timeout="auto" unmountOnExit key={index}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  // checked={/* Add your checked logic here */}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": index.toString() }}
                />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
      <ListItemButton onClick={handleClickColor}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Color" />
        {openColor ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {colorArray.map((item, index) => (
        <Collapse in={openColor} timeout="auto" unmountOnExit key={index}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  // checked={/* Add your checked logic here */}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": index.toString() }}
                />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
      <ListItemButton onClick={handleClickStyling}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Styling" />
        {openStyling ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {stylingArray.map((item, index) => (
        <Collapse in={openStyling} timeout="auto" unmountOnExit key={index}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  // checked={/* Add your checked logic here */}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": index.toString() }}
                />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
      <ListItemButton onClick={handleClickFood}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Food" />
        {openFood ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {foodArray.map((item, index) => (
        <Collapse in={openFood} timeout="auto" unmountOnExit key={index}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  // checked={/* Add your checked logic here */}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": index.toString() }}
                />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
      <ListItemButton onClick={handleClickOthers}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Others" />
        {openOthers ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {othersArray.map((item, index) => (
        <Collapse in={openOthers} timeout="auto" unmountOnExit key={index}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  // checked={/* Add your checked logic here */}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": index.toString() }}
                />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
    </List>
  );
}
