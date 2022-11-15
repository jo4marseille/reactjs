//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.js";
import Form from "./pages/Form.js";
import Translators from "./pages/Translators";
import Flags from "./pages/Flags";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form_translator" element={<Form />} />
        <Route exact path="/list_translators" element={<Translators />} />
        <Route exact path="/list_flags" element={<Flags />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
