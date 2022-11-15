import "./App.css";
import Map from "./components/Map";
import NewsList from "./components/NewsList";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
      <Home />
      <Map />
      <NewsList />
      <p>Test</p>
    </>
  );
}

export default App;
