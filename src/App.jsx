import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Design from "./pages/services/Design";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
