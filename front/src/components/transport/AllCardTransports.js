import React from "react";
import data from "../../data.json";
import Card from "../Card";

function AllCardTransports() {

    return(<div className="componentBg">
        {data.transports.map((e) => {

            return(
                
                <Card name={e.name} description={e.description} lien= {e.lien} image={e.image}/>
            )
        }
        )}
            
        
            </div>);
    
}
export default AllCardTransports