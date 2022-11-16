import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Css/logo.png";
import "../Css/nav.css";

import React, { Component } from "react";

function Navig() {
  return (
    <Navbar bg="light" expand="lg">
      <Container class="container-logo">
        <Navbar.Brand href="https://dev.jo4marseille.fr/">
          <img class="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav class="menu">
            <Nav.Link  href="/">Accueil</Nav.Link>
            <Nav.Link  href="/presents">Récompenses</Nav.Link>
            <Nav.Link  href="/account">Mon compte</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navig;
