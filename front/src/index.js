import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Main from "./Route";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
