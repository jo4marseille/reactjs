import React from 'react';
import {Parallax} from "react-parallax";


import "./ContainerDirect.css"

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
        <div>


            <h2 id={"title_direct"}>
                Le direct
            </h2>


            <iframe
                //width="80vw" height="315"
                class="frame"

                src="https://www.youtube.com/embed/bf4Jkbpl9mU"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>

            <h3 class={"title_match"}>
                RUGBY: Aix VS Madrid
            </h3>
            <h4 class={"title_score"}> 1 - 0</h4>
            <p className="p_match">Petit texte resumant la situation Petit texte resumant la situation Petit texte
                resumant la situation
                Petit texte resumant la situation Petit texte resumant la situation Petit texte resumant la
                situation</p>
        </div>
    );
};

export default ContainerDirect;
