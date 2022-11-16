import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const buttonRef = useRef();
  const navRef = useRef();
  const [active, setActive] = useState("header__menu");
  const [navState, SetNavState] = useState(true);
  const [isLogged, setIsLogged] = useState(true);

  function logoutHandler() {
    localStorage.removeItem("userToken", "userId");
  }

  const navToggle = (event) => {
    if (navState == true) {
      buttonRef.current.classList.add("active");
      navRef.current.classList.add("active");
      SetNavState(false);
    } else if (navState == false) {
      buttonRef.current.classList.remove("active");
      navRef.current.classList.remove("active");
      SetNavState(true);
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("userToken")){
      setIsLogged(true);
    }
  });

  return (
      <nav className="navbar" ref={navRef}>
        <ul>
          <Link to={`/main`}>
            <li>Discipline</li>
          </Link>
          <Link to={"/sports"}>
            <li>Délégations</li>
          </Link>
          <Link to={"/sports"}>
            <li>Athlètes</li>
          </Link>
          <Link to={"/sports"}>
            <li>Evenements</li>
          </Link>
          <Link to={"/sports"}>
            <li>Vote</li>
          </Link>
          {isLogged ? <Link to={"/"} onClick={logoutHandler}>
            <li>Déconnexion</li>
          </Link> : <p></p>}
        </ul>
      </nav>
  );
}

export default Navbar;
