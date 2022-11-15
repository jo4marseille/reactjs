import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Accueil/>} />
            <Route path={"/*"} element={<Accueil/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
