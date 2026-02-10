import React from "react";
import "./App.css";
import TaxWebsite from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <TaxWebsite />

      <Footer />
    </div>
  );
};

export default App;
