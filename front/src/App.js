
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
          <Route exact path="/transport">
            <AllCardTransports />
          </Route>
          <Route path="/hebergements">
            <AllCardLodgings />
          </Route>
          <Route path="/restauration">
            <AllCardRestaurations />
          </Route>
          <Route path="/sport">
            <AllCardSports />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
