import logo from '../../assets/logoblanc.png';

import './header.css';

const Header = () => (
    <header>
        <div class="logo">
            <a href="https://dev.jo4marseille.fr/" src="Logo/logo by c4m noir.png" alt="Logo">
            <img src={logo} alt="logo" height="50px" width="150px" />
            </a>
        </div>
        <nav class="d-flex g-1 navi flx-w jc-c">
            <a href="https://dev.jo4marseille.fr/">Accueil</a>
            <a href="#">Projets</a>
            <a href="#">A propos </a>
            <a href="#">Contact</a>
        </nav>
    </header>
);

export default Header;
