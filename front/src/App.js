import logo from './logo.svg';
import './App.css';
import Rooter from "./router/Rooter";
import Notifs from "./components/notifications/Notifs";
import * as React from "react";

function App() {
    return (
        <div>
            <Rooter/>
            <Notifs/>
        </div>
    );
}

export default App;
