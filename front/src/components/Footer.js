import React from 'react';
import '../assets/footer.css';

function Footer() {
  return (
    <footer class="footer">
      <div class="row">
        <a href="https://www.departement13.fr/" target="_blank" class="column">
          <img src="front/src/assets/images/Bouches-du-Rhône_13_logo.png" alt="d13" />
        </a>
        <a href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB" target="_blank" class="column">
        <img src="/img/1280px-Voyage_Privé.svg.png" alt="voyage privé" />
        </a>
        <a href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" classN="column">
        <img src="/img/1024px-Amazon_Web_Services_Logo.png" alt="aws" />
        </a>
      </div>
      <div class="row">
        <a href="https://www.myprovence.fr/" target="_blank" class="column">
        <img class="smaller" src="/img/provencetourisme.png" alt="my provence"  />
        </a>
        <a href="https://inco-group.co/" target="_blank" class="column">
        <img class="smaller" src="/img/inco.png" alt="inco"  />
        </a>
        <a href="https://code4marseille.fr/" target="_blank" className="column">
        <img class="smaller" src="/img/code4marseilleF.png" alt="code4marseille"  />
        </a>
      </div>
    </footer>
  )
}

export default Footer