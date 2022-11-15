import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-row">
                <a href="https://www.departement13.fr/" target="_blank" className="footer-column">
                    <img src="/img/Bouches-du-Rhône_13_logo.png" alt="d13"/>
                </a>
                <a href="https://www.voyage-prive.com/login/index"
                   target="_blank" className="footer-column">
                    <img src="/img/Voyage_Privé.svg.png" alt="voyage privé"/>
                </a>
                <a href="https://inco-group.co/" target="_blank" className="footer-column">
                    <img className="smaller" src="/img/inco.png" alt="inco"/>
                </a>
            </div>
            <div className="footer-row">
                <a href="https://www.myprovence.fr/" target="_blank" className="footer-column">
                    <img className="smaller" src="/img/provencetourisme.png" alt="my provence"/>
                </a>

                <a href="https://code4marseille.fr/" target="_blank" className="footer-column">
                    <img className="smaller" src="/img/code4marseille.png" alt="code4marseille"/>
                </a>
                <a href='https://aws.amazon.com/fr/free/?trk=36ca612a-b750-4d2d-b0c1-7d0f0863c3d2&sc_channel=ps&s_kwcid=AL!4422!3!563933958237!e!!g!!aws&ef_id=CjwKCAiAjs2bBhACEiwALTBWZbBS_82ZNo1cYOa2VZxRCP9oLJiWZ9kAp2q4rDCBxIPehDGOP4nxghoCn_EQAvD_BwE:G:s&s_kwcid=AL!4422!3!563933958237!e!!g!!aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all' target="_blank" className="footer-column">
                    <img src="/img/AWS.png" alt="aws"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;