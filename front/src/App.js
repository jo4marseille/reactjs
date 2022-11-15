import communes from "./../src/datas/communes"
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from "./pages/Accueil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil/>}></Route>
        <Route path="/*" element={<Accueil/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
