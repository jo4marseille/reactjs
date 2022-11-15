import React from 'react';
import '../assets/footer.css';
import Aws from "../assets/images/AWS.png";
import Departement13 from "../assets/images/departement13.png";
import Code4marseille from "../assets/images/code4marseille.png";
import Inco from "../assets/images/inco.png";
import Provencetourisme from "../assets/images/provencetourisme.png";
import Voyage_prive from "../assets/images/voyage_prive.png";

function Footer() {
  return (
    <footer class="footer">
      <div class="row">
        <a href="https://www.departement13.fr/" target="_blank" class="column">
          <img src={Departement13} alt="d13" />
        </a>
        <a href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB" target="_blank" class="column">
        <img src={Voyage_prive} alt="voyage privé" />
        </a>
        <a href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" class="column">
        <img src={Aws} alt="aws" />
        </a>
      </div>
      <div class="row">
        <a href="https://www.myprovence.fr/" target="_blank" class="column">
        <img class="smaller" src={Provencetourisme} alt="my provence"  />
        </a>
        <a href="https://inco-group.co/" target="_blank" class="column">
        <img class="smaller" src={Inco} alt="inco" />
        </a>
        <a href="https://code4marseille.fr/" target="_blank" className="column">
        <img src={Code4marseille} alt="code4marseille"  />
        </a>
      </div>
    </footer>
  )
}

export default Footer