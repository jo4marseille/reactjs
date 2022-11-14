import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () =>{
    const navigate = useNavigate();

    return(<div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/athlete")}>Athlete</button>
        <button onClick={() => navigate("/sponsor")}>Sponsor</button>
    </div>)
}

export default Navigation;

