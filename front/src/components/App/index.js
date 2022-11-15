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
import Map from '../Map';
import Cards from '../Cards';

const App = () => (
  <div className="app">
    <div className="nav"></div>
    <div className="main">
      <Map />
      <div className="list">
        <Cards />
      </div>
    </div>
  </div>
);

export default App;
