import React, { useState } from "react";
import Iframe from "react-iframe";
export default function Map() {
  const [rest, Setrest] = useState(true);
  const [hotel, Sethotel] = useState(false);
  const [monument, Setmonument] = useState(false);
  const [Urgence, SetUrgence] = useState(false);

  const restaurant = () => {
    Setrest(true);
    SetUrgence(false);
    Sethotel(false);
    Setmonument(false);
  };
  const hotless = () => {
    Sethotel(true);
    SetUrgence(false);
    Setrest(false);
    Setmonument(false);
  };

  const monuments = () => {
    Sethotel(false);
    SetUrgence(false);
    Setrest(false);
    Setmonument(true);
  };
  const urgences = () => {
    Sethotel(false);
    SetUrgence(true);
    Setrest(false);
    Setmonument(false);
  };
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      ></link>
      <div className="container mt-4">
        <div className="row">
          <div className="col-2">
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => restaurant()}
            >
              Restaurant
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              class="btn btn-outline-dark"
              onClick={() => hotless()}
            >
              hotels
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              class="btn btn-outline-dark"
              onClick={() => monuments()}
            >
              Historique
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={() => urgences()}
            >
              Urgence
            </button>
          </div>
        </div>

        {rest ? (
          <div>
            <img
              src={require("../img/restaurant.png")}
              alt="logo"
              className="map"
            />
            <Iframe
              url="https://fr.calameo.com/read/0022434012ed00ac8a952"
              width="640px"
              height="320px"
              id=""
              className="map"
              display="block"
              position="relative"
            />
          </div>
        ) : (
          ""
        )}

        {hotel ? (
          <img src={require("../img/hotels.png")} alt="logo" className="map" />
        ) : (
          ""
        )}
        {monument ? (
          <img
            src={require("../img/monument.png")}
            alt="logo"
            className="map"
          />
        ) : (
          ""
        )}

        {Urgence ? (
          <div>
            <img
              src={require("../img/urgence.png")}
              alt="logo"
              className="map"
            />
            <Iframe
              url="https://www.marseille.fr/sites/default/files/contenu/social/PDF/carte-guide_solidarite-janv22.pdf"
              width="640px"
              height="320px"
              id=""
              className="map"
              display="block"
              position="relative"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
