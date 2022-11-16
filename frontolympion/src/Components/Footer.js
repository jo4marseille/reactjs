import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../Css/Footer.css";

import LogoOM from "../Css/Images/Logo_sponsors/Bouches-du-Rhône_13_logo.png";
import LogoINCO from "../Css/Images/Logo_sponsors/inco.png";
import Voyage from "../Css/Images/Logo_sponsors/Voyage_Privé.svg.png";
import AWS from "../Css/Images/Logo_sponsors/AWS.png";
import tourisme from "../Css/Images/Logo_sponsors/provencetourisme.png";
import code from "../Css/Images/Logo_sponsors/code4marseille.png";
function Footer() {
  return (
    <>
      <div className="footer_div">
        <Container>
          <Row>
            <Col>
              <a href="https://www.departement13.fr/">
                <img className="size_footer" src={LogoOM}></img>
              </a>
            </Col>
            <Col>
              <a href="https://inco-group.co/">
                <img className="size_footer" src={LogoINCO}></img>
              </a>
            </Col>
            <Col>
              <a href="https://www.voyage-prive.com/login/index">
                <img className="size_footer" src={Voyage}></img>
              </a>
            </Col>
            <Col>
              <a href="https://aws.amazon.com/fr/?nc2=h_lg">
                <img className="size_footer" src={AWS}></img>
              </a>
            </Col>
            <Col>
              <a href="https://www.myprovence.fr/">
                <img className="size_footer" src={tourisme}></img>
              </a>
            </Col>
            <Col className="size_footer">
              <a href="https://code4marseille.fr/">
                <img className="size_footer" src={code}></img>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
