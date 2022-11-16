import React from 'react';

import "./Footer.css"
import PictureBoucheDuRhone from "../../assets/images/Bouches-du-Rhone_13_logo.png"
import PictureVoyagePrive from "../../assets/images/Voyage_Prive.svg.png"
import PictureAWS from "../../assets/images/AWS.png"
import PictureProvenceTourisme from "../../assets/images/provencetourisme.png"
import PictureInco from "../../assets/images/inco.png"
import PictureCode4Marseille from "../../assets/images/code4marseille.png"


const Footer = () => {
    return (
        //
        // <footer className="footer">
        //     <div className="row">
        //         <a href="https://www.departement13.fr/" target="_blank" className="column">
        //             <img src={PictureBoucheDuRhone} alt="d13"/>
        //         </a>
        //         <a href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB"
        //            target="_blank" className="column">
        //             <img src={PictureVoyagePrive} alt="voyage privé"/>
        //         </a>
        //         <a href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" className="column">
        //             <img src={PictureAWS} alt="aws"/>
        //         </a>
        //     </div>
        //     <div className="row">
        //         <a href="https://www.myprovence.fr/" target="_blank" className="column">
        //             <img className="smaller" src={PictureProvenceTourisme} alt="my provence"/>
        //         </a>
        //         <a href="https://inco-group.co/" target="_blank" className="column">
        //             <img className="smaller" src={PictureInco} alt="inco"/>
        //         </a>
        //         <a href="https://code4marseille.fr/" target="_blank" className="column">
        //             <img className="smaller" src={PictureCode4Marseille} alt="code4marseille"/>
        //         </a>
        //     </div>
        // </footer>

        <footer class="footer">
            <div class="row">
                <a href="https://www.departement13.fr/" target="_blank"
                   class="column">
                    <img src={PictureBoucheDuRhone} alt="d13"/>
                </a>
                <a
                    href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&amp;affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB"
                    target="_blank" class="column">
                    <img src={PictureVoyagePrive} alt="d13" class=""/>
                </a>
                <a
                    href="https://inco-group.co/" class="column" target="_blank">
                    <img class="smaller" src={PictureInco} alt="d13"/>
                </a>
            </div>
            <div class="row">
                <a href="https://www.myprovence.fr/" target="_blank"
                   class="column">
                    <img src={PictureProvenceTourisme}
                         alt="d13"
                    />
                </a>
                <a
                    href="https://code4marseille.fr/" target="_blank" class="column">
                    <img src={PictureCode4Marseille} alt="d13"/>
                </a>
                <a
                    href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" class="column">
                    <img src={PictureAWS} alt="d13"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
