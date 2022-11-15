//import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  
  return (
    <AuthProvider>
      <div className="App">
        {/* <Signin /> */}
        <Signup />
      </div>
    </AuthProvider>
  );
}

export default App;
