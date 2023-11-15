/* eslint-disable */
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import ClientPage from "../pages/Client/ClientPage";
import ClientHome from "../pages/Client/ClientNav/ClientHome";
import ClientEvents from "../pages/Client/ClientNav/ClientEvents";
import ClientAppointments from "../pages/Client/ClientNav/ClientAppointments";
import ClientAccounts from "../pages/Client/ClientNav/ClientAccounts";

const ProtectedRoute = ({ cookies }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={cookies.username ? <ClientPage /> : <Navigate to="/login" />}
      >
        <Route index element={<ClientHome />} />
        <Route path="home" element={<ClientHome />} />
        <Route path="events" element={<ClientEvents />} />
        <Route path="appointments" element={<ClientAppointments />} />
        <Route path="accounts" element={<ClientAccounts />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoute;
