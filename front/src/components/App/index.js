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

const App = () => (
  <div className="app">
    <div className="nav"></div>
    <div className="main">
      <Map />
      <div className="list"></div>
    </div>
  </div>
);

export default App;
