import "./App.css";
import Map from "./components/Map";
import NewsList from "./components/NewsList";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Service from "./pages/services";
import Agenda from "./components/Agenda";

// import Service from "./pages/services";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Map />
        <NewsList />
        <Agenda />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/map" component={Map} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
