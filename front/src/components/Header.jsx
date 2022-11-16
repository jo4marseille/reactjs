import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/img/assets/logo_Jo4_marseille_1.png";
import burgerVecto from "../img/assets/burgerVecto.png"
import { Link } from 'react-router-dom'

const Header = () =>{

    const navigate = useNavigate();

    const style = {color: "#00004d", fontSize: "24px", fontWeight: "bold", marginLeft: "10px", fontFamily: 'Poppins, sans-serif'};

    return(
        <>

            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white font" style={{ height: '80px'}}>
                <div className="container-fluid bg-white">
                <img className=" navbar-brand" src={logo} alt="" onClick={() => navigate("/")}/>
                  <button className="navbar-toggler border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img className="burger" src={burgerVecto} alt="burger"/>
                  </button>
                </div>

                  <div className="collapse navbar-collapse  bg-white " id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center mx-5">
                      <li className="nav-item" >
                        <Link to="/" className="nav-link acceuil" style={style} aria-current="page" >Acceuil</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link acceuil" style={style}  aria-current="page" >Projet</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link  acceuil" style={style}  aria-current="page" >Local</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link  acceuil" style={style} aria-current="page" >Contact</Link>
                      </li>
                    </ul>
                  </div>

              </nav>

</>

    )
}

export default Header;
