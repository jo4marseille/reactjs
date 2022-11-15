
import * as React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./components/Navbar";
import AllCardTransports from './components/transport/AllCardTransports';
import AllCardLodgings from './components/lodging/AllCardLodgings';
import AllCardRestaurations from './components/restauration/AllCardRestaurations';
import AllCardSports from './components/sport/AllCardSports';
import Footer from './components/Footer';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/home"  element={<Home />}/>      
          <Route exact path="/transport"  element={<AllCardTransports />}/>      
          <Route path="/hebergements" element={<AllCardLodgings />} />   
          <Route path="/restauration"element={<AllCardRestaurations />} />
          <Route path="/sport" element={<AllCardSports />} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}



export default App;

