import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Logo from "../../assets/foodBudLogo.png";

//CLIENT NAV ICONS
import HomeIcon from "@mui/icons-material/Home";
import CakeIcon from "@mui/icons-material/Cake";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Link as NavLink, useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import clientBg from "../../assets/clientBg.png";

//NAV LINK NAMES
const linkName = ["Home", "My Events", "Appointments", "Accounts"];

//NAV LINKS
const links = [
  "/client/home",
  "/client/events",
  "/client/appointments",
  "/client/accounts",
];

//NAV ICONS
const linkIcons = [HomeIcon, CakeIcon, ContentPasteIcon, AccountCircleIcon];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // background: `linear-gradient(to right, #03A9F4, #E7238B)`, //GRADIENT TO
  backgroundColor: "#03A9F4",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ClientPage({ setCookie }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    // Clear user session information (e.g., remove stored username or token)
    setCookie("username", "", { expires: 0 });
    localStorage.clear();

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* BACKGROUND OF THE WHOLE CANVASS */}
        <div className="absolute inset-0 bg-white">
          <img src={Logo} alt="logo" className="absolute h-10 top-4 left-12" />
        </div>

        {/* TOP BAR */}
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "20px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {/* Dashboard */}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={handleLogout}>
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* SIDE NAV */}
        <Drawer
          variant="permanent"
          open={open}
          // className="border-2 border-red-600"
        >
          <Divider />
          {/* ROUTES GOING TO EACH NAVS */}
          {linkName.map((link, key) => (
            <NavLink to={links[key]} key={key}>
              <ListItemButton selected={location.pathname === links[key]}>
                <ListItemIcon>
                  {React.createElement(linkIcons[key])}
                </ListItemIcon>
                <ListItemText primary={link} />
              </ListItemButton>
            </NavLink>
          ))}
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            // height: "100vh",
            zIndex: 10,
            // border: "4px solid green",
          }}
        >
          {/* CONTAINER FOR EACH NAV */}
          <Container
            maxWidth="full"
            sx={{
              // border: "4px solid red",
              backgroundImage: `url(${clientBg})`, // Set the background image
              backgroundSize: "cover", // Adjust the background size as needed
              backgroundRepeat: "no-repeat", // Specify background repeat behavior
            }}
            className="bg-slate-200 min-h-[130vh] "
          >
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
