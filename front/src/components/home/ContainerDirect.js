import React from 'react';
import {Parallax} from "react-parallax";
import LiveTvIcon from '@mui/icons-material/LiveTv';


import "./ContainerDirect.css"
import ContainerDiag from "./ContainerDiag";
import ContainerDiag2 from "./ContainerDiag2";

const insideStyles = {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: 5,
    color: "white",
    boxShadow: " 2px 2px 2px white",
    textAlign: "center",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: 52
};


const ContainerDirect = () => {

    return (
        <div style={{
            zIndex: 1000,
            // backgroundColor: "white"
        }}>


            <h2 id={"title_direct"}>
                {/*<LiveTvIcon style={{ fontSize: 44, marginTop: 105}}/>*/}
                Le direct
            </h2>


            <iframe
                //width="80vw" height="315"
                className="frame"
                src="https://www.youtube.com/embed/bf4Jkbpl9mU?autoplay=1&mute=1"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen

            />


            {/*<div>*/}
            {/*    <ContainerDiag/>*/}
            <ContainerDiag2/>
            {/*</div>*/}


            <h4 className={"title_score"}> 9 - 4</h4>
            <p className="p_match">
                Pieter-Steph du Toit et Antoine Dupont ont tous deux été exclus samedi au Vélodrome, lors du succès du
                XV de France face à l’Afrique du Sud, 30-26. Deux cartons rouges très différents aux yeux de notre
                consultant Jean-Baptiste Lafond. Il espère que l’intention sera prise en compte, à l’heure des
                sanctions, et suggère d’écouter sa chronique sur la création d'un carton... noir.
            </p>
        </div>
    );
};

export default ContainerDirect;
