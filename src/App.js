import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { CookiesProvider, useCookies } from "react-cookie";

//IMPORT PAGES
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PackagesPage from "./pages/PackagesPage";
import GalleryPage from "./pages/GalleryPage";
import FaqsPage from "./pages/FaqsPage";
import ContactUsPage from "./pages/ContactUsPage";
import NavBar from "./components/NavBar";
import ReviewPage from "./pages/ReviewPage";

//CLIENT PAGES
import ClientPage from "./pages/Client/ClientPage";
import ClientHome from "./pages/Client/ClientNav/ClientHome";
import ClientEvents from "./pages/Client/ClientNav/ClientEvents";
import ClientAppointments from "./pages/Client/ClientNav/ClientAppointments";
import ClientAccounts from "./pages/Client/ClientNav/ClientAccounts";

//LOGIN
import LoginClientPage from "./pages/Client/LoginPages/LoginClientPage";
import ChangePasswordPage from "./pages/Client/LoginPages/ChangePasswordPage";
import PasswordChangedPage from "./pages/Client/LoginPages/PasswordChangedPage";
import SendResetEmailPage from "./pages/Client/LoginPages/SendResetEmailPage";
import UserIdentificationPage from "./pages/Client/LoginPages/UserIdentificationPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [cookies, setCookie] = useCookies(["username", "name"]);

  return (
    <BrowserRouter>
      <CookiesProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/contactUs" element={<ContactUsPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route
              path="/client*"
              element={
                <ProtectedRoute cookies={cookies} setCookie={setCookie} />
              }
            />
            <Route
              path="/login"
              element={<LoginClientPage setCookie={setCookie} />}
            />
          </Routes>
        </div>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
