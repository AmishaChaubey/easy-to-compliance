import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";


import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About/about";
import Compliance from "./pages/compilance/Compliance";
import ServicePage from "./pages/services/ServicePage";
import Regulatory from "./pages/regulatory/Regulatory";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Compliance */}
        <Route path="/compliance" element={<Compliance />} />

       
        <Route path="/services/:serviceId" element={<ServicePage />} />
                <Route path="/regulatory/:regulatoryId" element={<Regulatory/>} />


        {/* Optional 404 Page */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <h2 className="text-3xl font-bold text-gray-700">
                404 - Page Not Found
              </h2>
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
