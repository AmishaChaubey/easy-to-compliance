import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './pages/About/about'
import Home from "./pages/Home";

import Design from "./pages/services/Design";
import Services from "./pages/services/Services";
import Compliance from "./pages/compilance/Compliance"


const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />



        <Route path="/design" element={<Design />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/compliance" element={<Compliance />} />

      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
