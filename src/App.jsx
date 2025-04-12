import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainBar from "./components/MainBar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import ServicesGrid from "./components/ServicesGrid";
import ContactUs from "./components/ContactUs";

import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBar />
              <AboutUs />
              <Services />
              <WhyChooseUs />
            </>
          }
        />
        <Route path="/services" element={<ServicesGrid />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
