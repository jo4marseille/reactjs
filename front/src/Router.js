import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sponsor from "./components/Sponsor";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sponsor" element={<Sponsor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
