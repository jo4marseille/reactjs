import React from 'react';
import Footer from "../components/layouts/Footer";

import "./Home.css"
import Header from "../components/layouts/Header";
import ContainerOpen from "../components/home/ContainerOpen";
import ContainerDirect from "../components/home/ContainerDirect";
import ContainerInfos from "../components/home/ContainerInfos";
import ContainerDiag from "../components/home/ContainerDiag";
import Loader from "./Loader";


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
                <ContainerInfos/>
            </div>


            <Footer/>
        </div>
    );
};

export default Home;
