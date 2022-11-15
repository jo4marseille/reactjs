import React from "react";
import Cards from "../Card";
import data from "../../data.json";

function AllCardLodgings() {
    return(<div className="componentBg">
                <img src="\img\logos\logoResto.png" alt='logo Restaurant' id="logo"/>

    {data.hotels.map((e) => {

        return(
            
            <Cards name={e.name} description={e.description} lien= {e.lien} image={e.image}/>
        )
    }
    )}
        </div>);
    
}
export default AllCardLodgings