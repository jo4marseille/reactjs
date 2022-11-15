import url1 from "../img/d13.png";
import url2 from "../img/voyageprive.png";
import url3 from "../img/inco.png";
import url4 from "../img/provencetourisme.png";
import url5 from "../img/code4marseille.png";
import url6 from "../img/AWS.png";

export default function Footer() {
  return (
    <>
      <footer class="footer">
        <a href="https://www.departement13.fr/" target="_blank">
          <img src={url1} alt="d13" />
        </a>
        <a href="https://www.voyage-prive.com" target="_blank">
          <img src={url2} alt="voyage privé" />
        </a>
        <a href="https://inco-group.co/" target="_blank">
          <img class="smaller" src={url3} alt="inco" />
        </a>
        <a href="https://www.myprovence.fr/" target="_blank">
          <img src={url4} alt="my provence" />
        </a>
        <a href="https://code4marseille.fr/" target="_blank">
          <img src={url5} alt="code4marseille" />
        </a>

        <a href="https://aws.amazon.com/fr/" target="_blank">
          <img src={url6} alt="aws" />
        </a>
      </footer>
    </>
  );
}
