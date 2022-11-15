import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Clubs from "./pages/Clubs";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path={"/home"} element={<Home/>} />
            <Route path={"/clubs"} element={<Clubs/>} />
            <Route path={"/*"} element={<Home/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
