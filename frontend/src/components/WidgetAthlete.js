import React, {useState} from 'react';
import Data from "../data/data_athletes.json";

const WidgetAthlete = () => {

    const data = Data;
    const [search, setSearch] = useState("");
    const [searchFirs, setSearchFirs] = useState("");
    const [searchLast, setSearchLast] = useState("");
    const [athh, setAthh] = useState(data[4]);
    const [searchResult, setSearchResult] = useState("");


    const handleClick = () => {


        setSearchResult("")
        console.log(search);
        for (let i = 0; i < data.length; i++) {
            if (data[i].first_name === search.split(' ')[0] && data[i].last_name === search.split(' ')[1]) {
                setAthh(data[i]);
            }
        }
        console.log(athh)
    };


    return (
        <>

            <div className="widgetAthlete">

                <h3 className="athletetitle">LES ATHLÈTES</h3>
                <input style={{borderRadius: "5px", marginTop:"10px"}} onChange={(e) => {
                    setSearch(e.target.value);
                    console.log(search)
                    setSearchLast(search.split(' ')[0]);
                    setSearchFirs(search.split(' ')[1]);
                }} value={search} type="text" placeholder='Nom Prénom'/>
                <button style={{borderRadius: "5px", marginTop:"10px"}} onClick={handleClick}> Rechercher</button>
                <p style={{color:"white"}}>{searchResult}</p>
                <div className="cardsearch">
                    <div className="first">
                        <span>
                    <img src={athh.image} alt="img athlete"/>
                            </span>

                        <span>
                            <h4>{athh.first_name} {athh.last_name}</h4>
                            <p>{athh.birth}</p>
                                <img alt="image pays" className="imgpays"
                                     src={"https://countryflagsapi.com/svg/" + athh.nationality}/>
                                </span>


                    </div>

                    <div className="third">
                        <span> <p><span className="medaille">🥇</span> {athh.gold_medal}</p></span>
                        <span><p><span className="medaille">🥈</span> {athh.silver_medal}</p></span>
                        <span><p><span className="medaille">🥉</span> {athh.copper_medal}</p></span>
                    </div>

                    <div className="second">
                        <p>{athh.discipline}</p>

                        <p>{athh.height}cm</p>
                        <p>{athh.weight}kg</p>
                    </div>
                </div>

                <div className="corp">


                    {data.slice(1, 50).map(athlete => (
                            <div key={athlete.first_name} className="card">
                                <div className="first">
                        <span>
                    <img src={athlete.image} alt="img athlete"/>
                            </span>

                                    <span>
                            <h4>{athlete.first_name} {athlete.last_name}</h4>
                            <p>{athlete.birth}</p>
                                <img alt="image pays" className="imgpays"
                                     src={"https://countryflagsapi.com/svg/" + athlete.nationality}/>
                                </span>


                                </div>

                                <div className="third">
                                    <span> <p><span className="medaille">🥇</span> {athlete.gold_medal}</p></span>
                                    <span><p><span className="medaille">🥈</span> {athlete.silver_medal}</p></span>
                                    <span><p><span className="medaille">🥉</span> {athlete.copper_medal}</p></span>
                                </div>

                                <div className="second">
                                    <p>{athlete.discipline}</p>

                                    <p>{athlete.height}cm</p>
                                    <p>{athlete.weight}kg</p>
                                </div>


                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default WidgetAthlete;