import communes from "./../src/datas/communes"
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Accueil";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/*"} element={<Home/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
