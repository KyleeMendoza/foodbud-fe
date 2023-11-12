import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//IMPORT PAGES
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PackagesPage from "./pages/PackagesPage";
import GalleryPage from "./pages/GalleryPage";
import FaqsPage from "./pages/FaqsPage";
import ContactUsPage from "./pages/ContactUsPage";
import NavBar from "./components/NavBar";

//CLIENT PAGES
import ClientPage from "./pages/Client/ClientPage";
import ClientHome from "./pages/Client/ClientNav/ClientHome";
import ClientEvents from "./pages/Client/ClientNav/ClientEvents";
import ClientAppointments from "./pages/Client/ClientNav/ClientAppointments";
import ClientAccounts from "./pages/Client/ClientNav/ClientAccounts";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />

        <Route path="/client" element={<ClientPage />}>
          <Route index element={<ClientHome />} />
          <Route path="home" element={<ClientHome />} />
          <Route path="events" element={<ClientEvents />} />
          <Route path="appointments" element={<ClientAppointments />} />
          <Route path="accounts" element={<ClientAccounts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
