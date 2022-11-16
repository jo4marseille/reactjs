import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Swipe from '../Composents/Swipe';

const Pages = () => {
    const location = useLocation();
  return (
    <div>

        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />}/>
          <Route  path='/swipe' element={<Swipe />}/>
        </Routes>
      
    </div>
  )
}

export default Pages
