import logo from './logo.svg';
import './App.css';
import Rooter from "./router/Rooter";
import Notifs from "./components/notifications/Notifs";
import * as React from "react";
import Loader from "./views/Loader";

function App() {
    return (
        <div>
            <Loader/>
            <Rooter/>
            <Notifs/>
        </div>
    );
}

export default App;
