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

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
      {/* <Navbar />
      <Home /> */}
      {/* <Map /> */}
      {/* <NewsList />
      <Footer /> */}
      <Router>
        <Navbar />
        <Home />
        {/* <Map></Map> */}
        <NewsList />
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
