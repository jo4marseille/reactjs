import React from "react";
import "./clublist.css";
import { getObjets, getModifies } from "../../utils/element";
import ClubCardBlue from "./ClubCardBlue";
import ClubCardRed from "./ClubCardRed";

const ClubList = () => {
  //   const objectList = [getObjets()[0], getObjets()[1]];
  const objectList = [
    {
      nom: {
        libelleFr: "Olympique de Marseille",
      },
      localisation: {
        adresse: {
          adresse1: "33 Traverse de La Marine, Marseille",
          codePostal: "13012",
        },
      },
      contact: "digital@om.net",
      image: "https://koifaire.com/images/imgcat/407/1.jpg",
    },
    {
      nom: {
        libelleFr: "Soccer Plus",
      },
      localisation: {
        adresse: {
          adresse1: "Route Nationale 8, Gemenos",
          codePostal: "13420",
        },
      },
      contact: "contact@soccer-plus.com",
      image: "https://koifaire.com/images/imgcat/407/2.jpg",
    },
    {
      nom: {
        libelleFr: "Etoile sportive de cuges",
      },
      localisation: {
        adresse: {
          adresse1: "Chemin de Notre Dame, Cuges les pins",
          codePostal: "13780",
        },
      },
      contact: "contact@etoile-sportive.com",
      image: "https://koifaire.com/images/imgcat/407/2.jpg",
    },
  ];
  console.log(objectList[0]);
  return (
    <div className="clubs">
      <h1>CLUBS</h1>
      {objectList.map((element, index) =>
        index % 2 == 0 ? (
          <ClubCardBlue
            libelleFr={element.nom.libelleFr}
            adresse1={element.localisation.adresse.adresse1}
            codePostal={element.localisation.adresse.codePostal}
            contact={element.contact}
            image={element.image}
          />
        ) : (
          <ClubCardRed
            libelleFr={element.nom.libelleFr}
            adresse1={element.localisation.adresse.adresse1}
            codePostal={element.localisation.adresse.codePostal}
            contact={element.contact}
            image={element.image}
          />
        )
      )}
    </div>
  );
};

/* <div className="infoClub pair">
                <div className="contact">
                    <h3>Contact</h3>
                    <p>example@example.com</p>
                </div>
                <img src="/img/Logo_JO_d'été_-_Paris_2024.svg.png" alt="logo equipe" />
                <div className="name">
                    <h2>{object.nom.libelleFr}</h2>
                    <p>{object.localisation.adresse.adresse1}, {object.localisation.adresse.codePostal}</p>
                </div>
            </div> */

// <div className="infoClub impair">
//     <div className="name">
//         <h2>{element.nom.libelleFr}</h2>
//         <p>{element.localisation.adresse.adresse1}, {element.localisation.adresse.codePostal}</p>
//     </div>
//     <img src="/img/Logo_JO_d'été_-_Paris_2024.svg.png" alt="logo equipe" />
//     <div className="contact">
//         <h3>Contact</h3>
//         <p>example@example.com</p>
//     </div>
// </div>

export default ClubList;
