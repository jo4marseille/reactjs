import WidgetBlue from '../components/widgetEvents/WidgetBlue';
import WidgetRed from '../components/widgetEvents/WidgetRed';
import { getObjets, getModifies } from "../utils/element";
import { useState } from 'react';

const Home = () => {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [sport, setSport] = useState('');
    const [components, setComponents] = useState([]);

    const objetByDate = getModifies().filter((modifieHash) => {
        return modifieHash.datesOuverture !== undefined &&
            modifieHash.datesOuverture.flat().includes('2022-12-20');
      });
  
      const objetByCategories = objetByDate.filter((modifieHash) => {
        return modifieHash.informationsFeteEtManifestation !== undefined &&
            modifieHash.informationsFeteEtManifestation.categories !== undefined &&
            modifieHash.informationsFeteEtManifestation.categories[0].id == 2107;
      });
  
      const objetsByManifestationTypeNature = getModifies().filter((modifieHash) => {
        return modifieHash.informationsFeteEtManifestation !== undefined &&
            modifieHash.informationsFeteEtManifestation.typesManifestation !== undefined &&
            modifieHash.informationsFeteEtManifestation.typesManifestation[0].id == 1966 && 
            modifieHash.datesOuverture.flat().includes('2022-12-20');
      });

      const objetsByManifestationTypeTradition = getModifies().filter((modifieHash) => {
        return modifieHash.informationsFeteEtManifestation !== undefined &&
            modifieHash.informationsFeteEtManifestation.typesManifestation !== undefined &&
            modifieHash.informationsFeteEtManifestation.typesManifestation[0].id == 1973;
      });

      const objetsByManifestationTypeCulture = getModifies().filter((modifieHash) => {
        return modifieHash.informationsFeteEtManifestation !== undefined &&
            modifieHash.informationsFeteEtManifestation.typesManifestation !== undefined &&
            modifieHash.informationsFeteEtManifestation.typesManifestation[0].id == 1958;
      });

      function loadWidgets(){
        console.log(category);
        if(date != null && category != null){
            var i = 0
            setComponents([])
            const objetsByManifestationType = getModifies().filter((modifieHash) => {
                return modifieHash.informationsFeteEtManifestation !== undefined &&
                    modifieHash.informationsFeteEtManifestation.typesManifestation !== undefined &&
                    modifieHash.informationsFeteEtManifestation.typesManifestation[0].id == category && 
                    modifieHash.datesOuverture.flat().includes(date);
              });
    
              objetsByManifestationType.map(element => {
                if(i%2 == 0) {
                    setComponents(oldArray => [...oldArray, <WidgetBlue element={element}/>])
                } else {
                    setComponents(oldArray => [...oldArray, <WidgetRed date={date} element={element}/>])
                }
                ++i
              });
        }
      }

    return (
        <>
            <div className={"home"}>
                <div className={"home-sub-1"}><span>AGEN</span></div>
                <div className={"home-sub-2"}><span>DA</span></div>
                <div className={"home-sub-3"}></div>
                <div className={"home-sub-4"}></div>
                <div className={"home-sub-5"}>
                    <span>DATE</span>
                </div>
                <div className={"home-sub-6"}>
                    <div className={"home-sub-5-first-input"}>
                        <input name={"date_start"} type="date" onChange={(e) => {
                            setDate(e.target.value)
                        }}/>
                    </div>
                </div>
                <div className={"home-sub-7"}></div>
                <div className={"home-sub-8"}></div>
                <div className={"home-sub-9"}>
                    <span>EVENT</span>
                </div>
                <div className={"home-sub-10"}></div>
                <div className={"home-sub-11"}>
                    <div>
                        <select onChange={(e) => {
                            if(e.target.value == "CULTURE") {
                                setCategory("1958")
                            } else if(e.target.value == "NATURE") {
                                setCategory("1966")
                            } else if(e.target.value == "TRADITION") {
                                setCategory("1973")
                            }
                        }}>
                            <option value="">CATEGORIE</option>
                            <option value="NATURE">NATURE</option>
                            <option value="CULTURE">CULTURE</option>
                            <option value="TRADITION">TRADITION</option>
                        </select>
                    </div>
                </div>
                <div className={"home-sub-12"}>
                    <div>
                        <select>
                            <option value="">SPORT</option>
                            <option value="VOILE">VOILE</option>
                            <option value="FOOTBALL">FOOTBALL</option>
                        </select>
                    </div>
                </div>
            </div>
            {console.log(objetsByManifestationTypeNature)}
            <button className={"search-button btn btn-primary m-3"} onClick={() => {loadWidgets()}}>Rechercher</button>
            {components}
        </>
    );
};

export default Home;