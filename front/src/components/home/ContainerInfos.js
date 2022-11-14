import React from 'react';
import {Parallax} from "react-parallax";


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


const ContainerInfos = () => {

    const image4 =
        "https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg";


    return (
        <div>
            <Parallax
                // bgImage={image4}
                strength={200}
                renderLayer={percentage => (
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(255, 125, 0, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                //borderRadius: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 1000,
                                height: percentage * 1000
                            }}
                        />
                    </div>
                )}
            >
                <div style={{height: "100vh"}}>
                    <div style={insideStyles}>La vidéo</div>
                </div>
            </Parallax>
            {/*<div style={{height: 500}}/>*/}
            {/*<h2>{"\u2728"}</h2>*/}
        </div>
    );
};

export default ContainerInfos;
