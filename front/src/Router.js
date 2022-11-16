import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sponsor from "./components/Sponsor/Sponsor";
import Athlete from "./components/Athlete/Athlete";
import SposorOffer from "./components/SposorOffer";
import Footer from "./components/Footer";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/athlete" element={<Athlete />} />
          <Route path="/PostSponsoring" element={<SposorOffer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
