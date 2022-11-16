import React from "react";
import "./clublist.css";
import { getObjets, getModifies } from "../../utils/element";

const ClubCardBlue = (props) => {
  return (
    <div>
      <div
        className="infoClub pair"
      >
        <div className="contact">
          <h3>Contact</h3>
          <p>{props.contact}</p>
        </div>
        <img src={props.image} alt="logo equipe" />

        <div className="name">
          <h2>{props.libelleFr}</h2>
          <p>
            {props.adresse1}, {props.codePostal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubCardBlue;
