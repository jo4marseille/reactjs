/* Import CSS principal */
import './App.css';

/* Import Components */
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import LogReg from './Pages/LogReg/LogReg';

/* Import React Router */
import { Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} title="Home" />
        <Route path='/login' element={<LogReg />} title="Home" />
      </Routes>
    </div>
  );
}

export default App;
