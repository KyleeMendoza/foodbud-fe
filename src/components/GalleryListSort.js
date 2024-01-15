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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function GalleryListSort({
  handleGalleryType,
  handleCelebrantGender,
  handleEventType,
}) {
  const [openPackages, setOpenPackages] = React.useState(false);
  const [openGender, setOpenGender] = React.useState(false);
  const [openToe, setOpenToe] = React.useState(false);
  const [openTheme, setOpenTheme] = React.useState(false);

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
          Filters
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickPackages}>
        <ListItemIcon>
          {/* change this icon according to the item */}
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
          {/* change this icon according to the item */}
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
          {/* change this icon according to the item */}
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
    </List>
  );
}
