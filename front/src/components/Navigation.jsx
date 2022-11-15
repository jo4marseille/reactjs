import React from "react";
import { useNavigate } from "react-router-dom";
import logoStyle from "../../src/img/Logo/logo by c4m noir.png";

const Navigation = () =>{
    const navigate = useNavigate();

    return(<div>
        <img src={logoStyle} onClick={() => navigate("/")}/>
        <button onClick={() => navigate("/athlete")}>Cherchez un Sponsor</button>
        <button onClick={() => navigate("/PostSponsoring")}>Proposez de sponsoriser</button>
    </div>)
}

export default Navigation;

