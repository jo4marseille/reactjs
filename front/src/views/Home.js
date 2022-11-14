import React from 'react';
import Footer from "../components/layouts/Footer";

import "./Home.css"
import Header from "../components/layouts/Header";
import ContainerOpen from "../components/home/ContainerOpen";
import ContainerDirect from "../components/home/ContainerDirect";


function Home() {
    return (
        <div>
            <Header/>
            <div
                id="ctn_open"
            >

                <ContainerOpen/>

            </div>

            <div
                id="ctn_direct"
            >

                <ContainerDirect/>
            </div>


            <div
                id="ctn_infos"
            >

            </div>


            <Footer/>
        </div>
    );
};

export default Home;
