import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-row">
                <a href="src/components/footer/Footer" target="_blank" className="footer-column">
                    <img src="/img/Bouches-du-Rhône_13_logo.png" alt="d13"/>
                </a>
                <a href="src/components/footer/Footer?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB"
                   target="_blank" className="footer-column">
                    <img src="/img/Voyage_Privé.svg.png" alt="voyage privé"/>
                </a>
                <a href="src/components/footer/Footer?nc2=h_lg" target="_blank" className="footer-column">
                    <img src="/img/AWS.png" alt="aws"/>
                </a>
            </div>
            <div className="footer-row">
                <a href="src/components/footer/Footer" target="_blank" className="footer-column">
                    <img className="smaller" src="/img/provencetourisme.png" alt="my provence"/>
                </a>
                <a href="src/components/footer/Footer" target="_blank" className="footer-column">
                    <img className="smaller" src="/img/inco.png" alt="inco"/>
                </a>
                <a href="src/components/footer/Footer" target="_blank" className="footer-column">
                    <img className="smaller" src="/img/code4marseille.png" alt="code4marseille"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;