import React from 'react';
import {Parallax} from "react-parallax";
import BackgroundHome from "../../assets/images/backgroundHome.jpg"
import Logo from "../../assets/images/JocontourPT2.png"

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

    return (
        <div>
            <Parallax bgImage={BackgroundHome} strength={-100}>
                {/*<Parallax bgImage={image3} blur={{min: -1, max: 3}}>*/}
                <div style={{height: "100vh"}}>

                    {/*<div style={insideStyles}>*/}
                    <div style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                        borderRadius: 5,
                        color: "white", textAlign: "center",
                        padding: 20,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        background: "rgba(255, 255, 255, 0.2)",
                    }}>
                        <div style={{
                            width: "35vw",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: 20,
                            minWidth: 300
                        }}>
                            <img src={Logo} style={{width: "100%"}}/>
                        </div>
                        <div style={{
                            width: "50vw",
                            minWidth: 320,
                            fontSize: "2em",
                            fontWeight: "bold"
                        }}>
                            Tous vos programmes et directs en live
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default ContainerOpen;
