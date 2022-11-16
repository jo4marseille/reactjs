import "./nav.css";
import logo from '../../assets/img/logo.png'

function Nav() {
  return (
    <div>
      <nav className="Nav justify-between items-center">
        <img src={logo} alt="logo" className="size ml-3" />
        <input
         type="text" 
         className="p-4 rounded-xl" 
         placeholder="Rechercher par évènement, date, lieux,..."
         />
        <ul className='btn ml-1'>
          <li>
            <a className="Sign" href="test">
              Inscription
            </a>
          </li>
          <li>
            <a className="Log ml-3 mr-3" href="test">
              Connexion
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
