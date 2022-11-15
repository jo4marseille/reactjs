import React from "react";
import Cards from "../Components/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Css/Presents.css";
function Presents() {
  const clarisse = {
    type: "Clarisse Agbegnenou",
    descritpion: "Uniforme de judo : 100 Oly",
    img: require("../Css/Images/Photo_athlètes/clarisse_agbegnenou_judo.jpg"),
  };
  const kevin = {
    type: "Kevin Mayer",
    descritpion: "Maillot de décathlon : 100 Oly",
    img: require("../Css/Images/Photo_athlètes/kevin_mayer_decathlon.jpg"),
  };

  const charline = {
    type: "Charline Picon",
    descritpion: "Maillot de voile : 100 Oly",
    img: require("../Css/Images/Photo_athlètes/Charline_Picon_voile.jpg"),
  };
  const nicolas = {
    type: "Nicolas Batum",
    descritpion: "Chasuble de basket : 100 Oly",
    img: require("../Css/Images/Photo_athlètes/nicolas_batum_basket.jpg"),
  };
  const florent = {
    type: "Florent Manodou",
    descritpion: "Slip de bain : 100 Oly",
    img: require("../Css/Images/Photo_athlètes/florent_manodou_natation.jpg"),
  };
  const teddy = {
    type: "Teddy Riner",
    descritpion: "Uniforme de judo : 100 Oly",
    img: require("../Css/Images/Photo_athlètes/teddy_riner_judo.jpg"),
  };
  const julian = {
    type: "Julian Alaphilippe",
    descritpion: "Maillot de cyclisme : 100 Oly",
    img: require("../Css/Images/Photo_athlètes/julian_alaphilippe_velo.jpg"),
  };
  const analia = {
    type: "Analia Pigree",
    descritpion: "Body de piscine: 100 Oly",
    img: require("../Css/Images/Photo_athlètes/analia_pigree_natation.jpg"),
  };
  const eunice = {
    type: "Eunice Barber",
    descritpion: "Maillot de heptatlon: 100 Oly",
    img: require("../Css/Images/Photo_athlètes/eunice_barber_heptatlon.jpg"),
  };

  const velo = {};

  return (
    <div className="background-slider">
      <Container>
        <Row>
          <Col>
            <Cards value={clarisse} />
          </Col>
          <Col>
            <Cards value={kevin} />
          </Col>
          <Col>
            <Cards value={charline} />
          </Col>
          <Col>
            <Cards value={nicolas} />
          </Col>
          <Col>
            <Cards value={florent} />
          </Col>
          <Col>
            <Cards value={teddy} />
          </Col>
          <Col>
            <Cards value={julian} />
          </Col>
          <Col>
            <Cards value={analia} />
          </Col>
          <Col>
            <Cards value={eunice} />
          </Col>
          <Col>
            <Cards value={velo} />
          </Col>
          <Col>
            <Cards value={velo} />
          </Col>
          <Col>
            <Cards value={velo} />
          </Col>
          <Col>
            <Cards value={velo} />
          </Col>
          <Col>
            <Cards value={velo} />
          </Col>
          <Col>
            <Cards value={velo} />
          </Col>
          <Col>
            <Cards value={velo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Presents;
