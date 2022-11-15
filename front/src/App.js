/* Import CSS principal */
import './App.css';

/* Import Components */
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Sports from './Pages/Sports/Sports';
import SportEvents from './Pages/Sports/SportEvents';
import Events from './Pages/Events/Events';
import Account from './Pages/Account/Account';

/* Import React Router */
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} title="Home" />
        <Route path='/sports' element={<Sports />} title="Home" />
        <Route path='/sport/:id' element={<SportEvents />} title="Home" />
        <Route path='/event/:id' element={<Events />} title="Home" />
        <Route path='/account' element={<Account />} title="Account" />
      </Routes>
    </div>
  );
}

export default App;