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



// import Compliance from "./pages/compilance/Compliance"
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
    </>
  );
};

export default App;
