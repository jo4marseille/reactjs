import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './assets/App.css';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  
  return (
<Router>

<Switch>
    <Route exact path="/bio" component={Bio}></Route>
    <Route exact path="/footer" component={Footer}></Route>
    <Route exact path="/header" component={Header}></Route>



  </Switch>
</Router>
  );
}

export default App;


