import React from "react";
import data from "../../data.json";
import Card from "../Card";

function AllCardTransports() {

    return(<div className="componentBg">
        <img src="\img\logos\logoTransport.png" alt='logo Transport' id="logo"/>
        {data.transports.map((e) => {

       
            return(
                
                <Card name={e.name} description={e.description} lien= {e.lien} image={e.image}/>
            )
        }
        )}
            
        </div>
    
)}

export default AllCardTransports