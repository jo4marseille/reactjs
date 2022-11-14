import React from 'react';
import {Parallax} from "react-parallax";
import BackgroundHome from "../../assets/images/backgroundHome.jpg"

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

const ContainerOpen = () => {
    const image3 =
        "https://images.pexels.com/photos/3210189/pexels-photo-3210189.jpeg";

    return (
        <div>
            <Parallax bgImage={BackgroundHome} strength={-100}>
                {/*<Parallax bgImage={image3} blur={{min: -1, max: 3}}>*/}
                <div style={{height: "100vh"}}>
                    <div style={insideStyles}>JO4Live<br/> Regroupe tous vos evenements </div>
                </div>
            </Parallax>
        </div>
    );
};

export default ContainerOpen;
