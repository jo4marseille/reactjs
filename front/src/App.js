import "./App.css";
import Map from "./components/Map";
import NewsList from "./components/NewsList";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
      <Home />
      {/* <Map /> */}
      <NewsList />
      <Footer />
    </>
  );
};

export default App;
