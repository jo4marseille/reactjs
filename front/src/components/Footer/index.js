import bdrlogo from '../../assets/Bouches-du-Rhône_13_logo.png';
import c4m from '../../assets/code4marseille.png';
import vp from '../../assets/Voyage_Privé.svg.png';
import inco from '../../assets/inco.png';
import pt from '../../assets/provencetourisme.png';
import aws from '../../assets/AWS.png';

import './footer.css';

const Footer = () => (
    <footer class="footer">
        <div class="row">
            <a href="https://www.departement13.fr/" target="_blank" class="column">
            <img src={bdrlogo} alt="d13" />
            </a>
            <a href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB" target="_blank" class="column">
            <img src={vp} alt="voyage privé" />
            </a>

            <a href="https://inco-group.co/" target="_blank" class="column">
            <img class="smaller" src={inco} alt="inco"  />
            </a>
        </div>
        <div class="row">
            <a href="https://www.myprovence.fr/" target="_blank" class="column">
            <img class="smaller" src={pt} alt="my provence"  />
            </a>

            <a href="https://code4marseille.fr/" target="_blank" class="column">
            <img class="smaller" src={c4m} alt="code4marseille"  />
            </a>
            <a href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" class="column">
            <img src={aws} alt="aws" />
            </a>
        </div>
    </footer>
);

export default Footer;
