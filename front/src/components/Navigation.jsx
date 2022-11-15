import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/img/assets/logo_Jo4_marseille_1.png";
import burgerVecto from "../../src/img/assets/burgerVecto.png"

const Navigation = () =>{
    const navigate = useNavigate();

    return(
        <div>
            <h1 className="projectTitle" style={{zIndex: "0"}}>Sports & <br></br>Athlètes</h1>
            <div className="jeNavigue font">
                <img className="logo" src={logo} onClick={() => navigate("/")}/>
                <div className="tools">
                    <p className="accueil" onClick={() => navigate("/")}>Accueil</p>
                    <p className="projets" onClick={() => navigate("/")}>Projets</p>
                    <p className="propos" onClick={() => navigate("/")}>À Propos</p>
                    <p className="contact" onClick={() => navigate("/")}>Contact</p>
                    <img className="burger" src={burgerVecto} alt="burger"/>
                </div>
            </div>
            <h1 className="firstTitle" onClick={() => navigate("/athlete")} >Cherchez un Sponsor</h1>
            <h1 className="secondTitle" onClick={() => navigate("/PostSponsoring")} >Proposez de sponsoriser</h1>

        </div>
    )
}

export default Navigation;
