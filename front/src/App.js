import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './assets/App.css';
import Bio from './components/Bio';

function App() {

  
  return (
<Router>

<Switch>
    <Route exact path="/bio" component={Bio}></Route>


  </Switch>
</Router>
  );
}

export default App;


