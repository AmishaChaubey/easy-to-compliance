import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './pages/About/about'
import Home from "./pages/Home";
import Design from "./pages/services/Design";
import Services from "./pages/services/Services";
import Compliance from "./pages/compilance/Compliance"
import CorporateCompliance from './pages/compilance/corporate-comp/Page'
import GSTCompliance from './pages/compilance/gst-compliance/Page'
import IncomeTaxCompliance from './pages/compilance/income-tax/Page'
import LabourLawCompliance from './pages/compilance/labour-law/Page'
import TaxationDocuments from './pages/documents/Documents'
import Contact from './pages/contact/Contacts'
import Blog from './pages/blog/Blog'
import BlogDetail from './pages/blog/BlogDetail'
const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/compliance/corporate-compliance" element={<CorporateCompliance/>} />
        <Route path="/compliance/gst-compliance" element={<GSTCompliance/>} />
        <Route path="/compliance/income-tax-compliance" element={<IncomeTaxCompliance/>} />
        <Route path="/compliance/labour-law-compliance" element={<LabourLawCompliance/>} />
        <Route path="/documents" element={<TaxationDocuments/>}/>
        <Route path="/contact" element={<Contact/>}/>
                      <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>

      <Footer />
      </Router>
    </>
  );
};

export default App;
