import React from 'react';
import Drapeau from '../components/Drapeau';
import Navbar from '../components/Navbar';
import Baselinehome from '../components/Baselinehome';
import Footer from '../components/Footer';

export default function Home() {


    return (
        <div className="">
        
            <Navbar/>
            <Baselinehome/>
            
                <Drapeau />
            
            <Footer/>
        </div>
    )
}