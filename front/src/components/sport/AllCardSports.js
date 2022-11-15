import React from "react";
import Card from "../Card";
import data from "../../data.json";
 
function AllCardSports() {
    return(<div className="componentBg">
    {data.centres.map((e) => {

        return(
            <Card name={e.name} description={e.description} lien= {e.lien} image={e.image}/>
        )
    }
    )}
        
    
        </div>);
    
}

export default AllCardSports;