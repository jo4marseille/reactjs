import React from 'react';
import Footer from '../Composents/Footer/Footer';
import Evenements from '../Composents/Evenements/Evenements';
import Nav from '../Composents/Nav/Nav';
import Banner from '../Composents/Banner';

const Home = () => {


  return (
    <div>
      <Nav />
      <Banner />
      <Evenements />
      <Footer />
    </div>
  )
}

export default Home
