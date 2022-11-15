
import * as React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import NavBar from "./components/Navbar";
import AllCardTransports from './components/transport/AllCardTransports';
import AllCardLodgings from './components/lodging/AllCardLodgings';
import AllCardRestaurations from './components/restauration/AllCardRestaurations';
import AllCardSports from './components/sport/AllCardSports';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/transport"  element={<AllCardTransports />}/>      
          <Route path="/hebergements" element={<AllCardLodgings />} />   
          <Route path="/restauration"element={<AllCardRestaurations />} />
          <Route path="/sport" element={<AllCardSports />} />
        </Routes>
      </Router>

    </div>
  );
}



export default App;

