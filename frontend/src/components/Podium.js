import React from 'react';
import '../css/podium.css';
import data_jo from '../data/data_athletes.json';



const Podium = () => {
    // alert(JSON.stringify(data_jo))
    // let lengthData = Object.keys(data_jo).length;
    let countries = {};
    //let nbcountries = 0;
    
    for (let athlete of data_jo) {
        if (!(athlete['nationality'] in countries)) {
            countries[athlete['nationality']] = [0, 0, 0];
            //nbcountries += 1;
        }
        countries[athlete['nationality']][0] += athlete['gold_medal'];
        countries[athlete['nationality']][1] += athlete['silver_medal'];
        countries[athlete['nationality']][2] += athlete['copper_medal'];
    }

    let items = Object.keys(countries).map((key) => { return [key, countries[key][0]] });
    
    items.sort((first, second) => { return first[1] - second[1] });
    
    let keys = items.map((e) => { return e[0] });
    
    keys.reverse();
    
    //debug
    for (let key of keys) {
        console.log(countries[key])
    }

    return (
        <>
            <div id="podium" className="podium">

                    <div id="silver">Chine  <img alt="image pays" className="imgpays"
                                                 src={"https://countryflagsapi.com/svg/cn"}/></div>


                <div id="gold">Angleterre<img alt="image pays" className="imgpays en"
                                              src={"https://countryflagsapi.com/svg/gb"}/></div>


                <div id="copper">France<img alt="image pays" className="imgpays"
                                            src={"https://countryflagsapi.com/svg/fr"}/></div>

            </div>
            <ul className="podium">
                <span>
                <li>Japon</li>
                <img alt="image pays" className="imgpays"
                     src={"https://countryflagsapi.com/svg/jp"}/>
                    </span>
                <span>
                <li>Italie</li>
                <img alt="image pays" className="imgpays"
                     src={"https://countryflagsapi.com/svg/it"}/>
                    </span>  <span>
                <li>Etats-Unis</li>
                <img alt="image pays" className="imgpays"
                     src={"https://countryflagsapi.com/svg/eu"}/>
                    </span>  <span>
                <li>Angleterre</li>
                <img alt="image pays" className="imgpays"
                     src={"https://countryflagsapi.com/svg/gb"}/>
                    </span>  <span>
                <li>Espagne</li>
                <img alt="image pays" className="imgpays"
                     src={"https://countryflagsapi.com/svg/es"}/>
                    </span>  <span>
                <li>Chine</li>
                <img alt="image pays" className="imgpays"
                     src={"https://countryflagsapi.com/svg/ch"}/>
                    </span>  <span>
                <li>Allemagne</li>
                <img alt="image pays" className="imgpays"
                     src={"https://countryflagsapi.com/svg/ge"}/>
                    </span>
            </ul>
        </>
    );
};

export default Podium;