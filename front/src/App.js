import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './assets/App.css';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Header from './components/Header';
import MapRtm from './components/MapRtm';
import Markerstransport from './components/Markerstransports';
import Tri from './components/Tri';
import Card from './components/Card';

function App() {

  
  return (
<Router>

<Switch>
    <Route exact path="/bio" component={Bio}></Route>
    <Route exact path="/footer" component={Footer}></Route>
    <Route exact path="/header" component={Header}></Route>
    <Route exact path="/MapRtm" component={MapRtm}></Route>
    <Route exact path="/Markerstransport" component={Markerstransport}></Route>
    <Route exact path="/tri" component={Tri}></Route>
    <Route exact path="/card" component={Card}></Route>




  </Switch>
</Router>
  );
}

export default App;


