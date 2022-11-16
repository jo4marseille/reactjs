import React from 'react';
import '../App.css';
import SwipeCard from './SwipeCard';
import styled from "styled-components";
import FooterSwipeCard from './FooterSwipeCard';
import HeaderSwipeCard from './HeaderSwipeCard';


const DivWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  border: 1px solid black;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)`;

const Swipe = () => {
  return (
    
      <DivWrapper className="App">
        <HeaderSwipeCard />
        <SwipeCard />
        <FooterSwipeCard />
      </DivWrapper>
  )
}

export default Swipe
