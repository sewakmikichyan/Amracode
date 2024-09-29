import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/Home";
import AboutPage from "../pages/about/About";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
};

export default AppRoutes;