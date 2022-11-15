import communes from "./../src/datas/communes"
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/*"} element={<Home/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
