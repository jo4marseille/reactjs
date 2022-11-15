import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const buttonRef = useRef();
  const navRef = useRef();
  const [active, setActive] = useState("header__menu");
  const [navState, SetNavState] = useState(true);

  function logoutHandler() {
    localStorage.removeItem("userToken");
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

  return (
      <nav className="navbar" ref={navRef}>
        <ul>
          <Link to={`/main`}>
            <li>Acceuil</li>
          </Link>
          <Link to={"/sports"}>
            <li>Evenements</li>
          </Link>
          <Link to={"/"} onClick={logoutHandler}>
            <li>Logout</li>
          </Link>
        </ul>
      </nav>
  );
}

export default Navbar;
