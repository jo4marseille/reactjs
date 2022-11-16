
import './Footer.css'
import AWS from "../../assets/img/AWS.png";
import C4M from "../../assets/img/code4marseille.png";
import d13 from "../../assets/img/d13.png";
import inco from "../../assets/img/inco.png";
import provencetourisme from '../../assets/img/provencetourisme.png';
import voyageprive from '../../assets/img/voyageprive.png';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.departement13.fr/" target="_blank" rel="noreferrer">
        <img src={d13} alt="d13" />
      </a>
      <a href="https://www.voyage-prive.com" target="_blank" rel="noreferrer">
        <img src={voyageprive} alt="voyage privé" />
      </a>
      <a href="https://inco-group.co/" target="_blank" rel="noreferrer">
        <img className="smaller" src={inco} alt="inco" />
      </a>
      <a href="https://www.myprovence.fr/" target="_blank" rel="noreferrer">
        <img src={provencetourisme} alt="my provence" />
      </a>
      <a href="https://code4marseille.fr/" target="_blank" rel="noreferrer">
        <img src={C4M} alt="code4marseille" />
      </a>

      <a href="https://aws.amazon.com/fr/" target="_blank" rel="noreferrer">
        <img src={AWS} alt="aws" />
      </a>
    </footer>
  );
}

export default Footer;
