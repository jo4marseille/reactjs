import React from 'react';

const widgetRed = (props) => {
    const {element} = props
    return (
        <div>
            <h1 className={"eventtitle"}>{element.nom.libelleFr}</h1>
            <a >
                <div className={"mt-3 eventwidget2"}>
                    <div className={"widget-part1"}><h1>HALLO</h1><img className='img-fluid' src={element.illustrations[0].traductionFichiers[0].url}></img></div>
                    <div className={"widget-part3"}><p>Adresse : {element.localisation.adresse.adresse1}, {element.localisation.adresse.codePostal}</p>
                    <p>{element.localisation.adresse.nomDuLieu}</p>
                    <p>{element.descriptionTarif.tarifsEnClair.libelleFr}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default widgetRed;