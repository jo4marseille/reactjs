import React from "react";
import "../Css/Account.css";

function Account() {
  return (
    <>
      <div class="container background-2">
        <div class="row">
          <div class="col-12 my-auto account-title-background">
            <p>Bienvnue sur votre compte !</p>
            <p class="texte">Il est bon d'être éco-responsable !</p>
          </div>
        </div>
      </div>

      <div class="container background-3">
        <div class="row account-row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 my-auto account-col-1">
            <p class="title-profile">Votre profil</p>
            <p class="info-profile">Prénom: Victor </p>
            <p class="info-profile">Nom: Hugo </p>
            <p class="info-profile">Email: victor.hugo@gmail.com </p>
            <p class="info-profile">Olympions: 345 </p>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-6 my-auto green-bloc"></div>
        </div>
      </div>
    </>
  );
}

export default Account;
