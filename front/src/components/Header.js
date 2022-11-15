import React from 'react';
import '../assets/Header.css';
import Logo_jo4marseille from "../assets/images/logo_jo4marseille.png";

function Header() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <a href="https://dev.jo4marseille.fr/" target="_blank" class="column">
          <img src={Logo_jo4marseille} alt="logo" className='logo'/>
        </a>
        <ul>
          <li><a href='https://dev.jo4marseille.fr/'>Accueil</a></li>
          <li><a href='https://dev.jo4marseille.fr/#main_container'>Projets</a></li>
          <li><a href='https://dev.jo4marseille.fr/#a-propos'>À propos</a></li>
          <li><a href='https://code4marseille.fr/contact/' target="_blank">Contact</a></li>
        </ul>
      </div>    
    </div>
  )
}

export default Header