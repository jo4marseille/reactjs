/****************
* App Component *
****************/

/*************
* Stylesheet *
*************/
import './app.css';

/*************
* Components *
*************/
import Header from '../Header';
import Map from '../Map';
import Cards from '../Cards';
import Footer from '../Footer';

const App = () => (
  <div className="app">
    <div className="nav">
      <Header />
    </div>
    <div className="main">
      <Map />
      <div className="list">
        <Cards />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
