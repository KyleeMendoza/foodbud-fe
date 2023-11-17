/* eslint-disable */
import React, {useEffect} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import ClientPage from "../pages/Client/ClientPage";
import ClientHome from "../pages/Client/ClientNav/ClientHome";
import ClientEvents from "../pages/Client/ClientNav/ClientEvents";
import ClientAppointments from "../pages/Client/ClientNav/ClientAppointments";
import ClientAccounts from "../pages/Client/ClientNav/ClientAccounts";
import ClientEventDetails from "../pages/Client/ClientNav/ClientEventDetails";

const ProtectedRoute = ({ cookies, setCookie }) => {

  const name = cookies.name
  // useEffect(() => {
  //   console.log(cookies.name)
  // }, [cookies])

  return (
    <Routes>
      <Route
        path="/"
        element={
          cookies.username ? (
            <ClientPage setCookie={setCookie} />
          ) : (
            <Navigate to="/login" />
          )
        }
      >
        <Route index element={<ClientHome name={name}/>} />
        <Route path="home" element={<ClientHome name={name}/>} />
        <Route path="events" element={<ClientEvents cookies={cookies} />} />
        <Route path="myEvent" element={<ClientEventDetails />} />
        <Route path="appointments" element={<ClientAppointments />} />
        <Route path="accounts" element={<ClientAccounts />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoute;
