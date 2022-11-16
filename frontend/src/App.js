import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/config.css"
import Main from "./components/Main";
import HeaderImg from "./components/HeaderImg";

function App() {
  return (
      <>
      <Header/>
          <HeaderImg/>
          <Main/>
      <Footer/>
      </>
  );
}

export default App;
