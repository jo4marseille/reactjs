import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/img/assets/logo_Jo4_marseille_1.png";
import burgerVecto from "../../src/img/assets/burgerVecto.png"

const Navigation = () =>{

    const navigate = useNavigate();

    return(

            <div className="jeNavigue font" style={{zIndex: "1"}}>
                <img className="logo" src={logo} alt="" onClick={() => navigate("/")}/>
                <div className="tools">
                    <p className="accueil" onClick={() => navigate("/")}>Accueil</p>
                    <p className="projets" onClick={() => navigate("/")}>Projets</p>
                    <p className="propos" onClick={() => navigate("/")}>À Propos</p>
                    <p className="contact" onClick={() => navigate("/")}>Contact</p>
                    <img className="burger" src={burgerVecto} alt="burger"/>
                </div>
            </div>

    )
}

export default Navigation;
