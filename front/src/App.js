/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./components/Home";

const App = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              class="smaller"
              src="https://www.biolit.fr/sites/default/files/Ville_de_Marseille_2021.png"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Idées de circuits
              </a>
              <a class="nav-link" href="#">
                informations
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Home />
      <div>
        <footer className="text-center text-white">
          <div class="container p-4">
            <section class="">
              <div class="row d-flex justify-content-center">
                <div class="footer">
                  <div class="row">
                    <a
                      href="https://www.departement13.fr/"
                      target="_blank"
                      class="column"
                      rel="noreferrer"
                    >
                      <img
                        src={require("./sponsorsfooter/Bouches-du-Rhone_13_logo.png")}
                        alt="d13"
                      />
                    </a>
                    <a
                      href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB"
                      target="_blank"
                      class="column"
                      rel="noreferrer"
                    >
                      <img
                        src={require("./sponsorsfooter/Voyage_Priv‚.svg.png")}
                        alt="voyage privé"
                      />
                    </a>
                    <a
                      href="https://aws.amazon.com/fr/?nc2=h_lg"
                      target="_blank"
                      classN="column"
                      rel="noreferrer"
                    >
                      <img
                        class="smaller"
                        src={require("./sponsorsfooter/AWS.png")}
                        alt="aws"
                      />
                    </a>
                  </div>
                  <div class="row">
                    <a
                      href="https://www.myprovence.fr/"
                      target="_blank"
                      class="column"
                      rel="noreferrer"
                    >
                      <img
                        class="smaller"
                        src={require("./sponsorsfooter/provencetourisme.png")}
                        alt="my provence"
                      />
                    </a>
                    <a
                      href="https://inco-group.co/"
                      target="_blank"
                      class="column"
                      rel="noreferrer"
                    >
                      <img
                        class="smaller"
                        src={require("./sponsorsfooter/inco.png")}
                        alt="inco"
                      />
                    </a>
                    <a
                      href="https://code4marseille.fr/"
                      target="_blank"
                      className="column"
                      rel="noreferrer"
                    >
                      <img
                        class="smaller"
                        src={require("./sponsorsfooter/code4marseille.png")}
                        alt="code4marseille"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="ratio ratio-16x9">
                    <iframe
                      class="shadow-1-strong rounded"
                      src="https://www.youtube.com/embed/tfBX9dDEhy8"
                      title="YouTube video"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
