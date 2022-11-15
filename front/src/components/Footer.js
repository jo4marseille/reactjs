function Footer() {

    return(
        <footer className="footer">
            <div className="rowFooter">
                <a href="https://www.departement13.fr/" target="_blank" className="column">
                <img src="img/footer/Bouches-du-Rhône_13_logo.png" alt="d13" />
                </a>
                <a href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB" target="_blank" className="column">
                <img src="img/footer/Voyage_Privé.svg.png" alt="voyage privé" />
                </a>
                <a href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" className="column">
                <img src="img/footer/AWS.png" alt="aws" />
                </a>
            </div>
            <div className="rowFooter">
                <a href="https://www.myprovence.fr/" target="_blank" className="column">
                <img className="smaller" src="img/footer/provencetourisme.png" alt="my provence"  />
                </a>
                <a href="https://inco-group.co/" target="_blank" className="column">
                <img className="smaller" src="img/footer/inco.png" alt="inco"  />
                </a>
                <a href="https://code4marseille.fr/" target="_blank" className="column">
                <img className="smaller" src="img/footer/code4marseille.png" alt="code4marseille"  />
                </a>
            </div>
        </footer>
    );
}

export default Footer;