import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "../pages/home/Home";
import ServicesPage from "../pages/services/Services";
import AboutPage from "../pages/about/About";
import ClientsPage from "../pages/clients/Clients";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/clients" element={<ClientsPage />} />
        </Routes>
    );
};

export default AppRoutes;