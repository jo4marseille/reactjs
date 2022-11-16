import React from 'react';
import Equ1 from "../../assets/images/logo_aix.png"
import Equ2 from "../../assets/images/cbru_logo_clean.png"

import "./ContainerDiag2.css"

const ContainerDiag2 = () => {
    return (
        <div style={{}}
             className={"grid"}
        >

            <div style={{
                backgroundColor: "#00004D",
                height: 300,
                width: "100%",
                color: "white"
            }}>

                   <div className={"ctn_left"}/>

                <div className={"text_left"}>
                    PROVENCE RUGBY
                </div>
            </div>

            <div style={{
                backgroundColor: "white",
                height: 300,
                width: "100%",
                color: "black"
            }}>
                <div
                    id={"triangle"}
                />

                <div className={"ctn_right"}/>

                <div className={"text_right"}>
                    C.B.R.U. CLUB
                </div>

            </div>
        </div>
    );
};

export default ContainerDiag2;
