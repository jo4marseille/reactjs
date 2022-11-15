//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.js";
import Form from "./pages/Form.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form_translator" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
