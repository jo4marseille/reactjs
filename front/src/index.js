import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/Header.css';
import './assets/footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import MyCard from './components/Card';
import CarteMath from './components/MapRtm';
import Legende from './components/Legende';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyHeader/>
    <MyCard/>
    <MyFooter/>
    <CarteMath/>
    <Legende/>

  </React.StrictMode>
);
