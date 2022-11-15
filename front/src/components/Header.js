import React from 'react';
import '../assets/Header.css';
import Logo_jo4marseille from "../assets/images/logo_jo4marseille.png";

function Header() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <a href="https://dev.jo4marseille.fr/" target="_blank" class="column">
          <img src={Logo_jo4marseille} alt="logo" />
        </a>
        <ul>
          <li><a href='https://dev.jo4marseille.fr/'>Accueil</a></li>
          <li><a href='https://dev.jo4marseille.fr/'>Projets</a></li>
          <li><a href='https://dev.jo4marseille.fr/'>À propos</a></li>
          <li><a href='https://dev.jo4marseille.fr/'>Contact</a></li>
        </ul>
      </div>    
    </div>
  )
}

export default Header