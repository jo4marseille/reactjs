import React from "react";
import Card from "../Card";
// import Card from 'react-bootstrap/Card';
import data from "../../data.json";
import Button from 'react-bootstrap/Button';
import Cards from "../Card";

function AllCardTransports() {

    return(<div className="componentBg">
        <img src="\img\logos\logoTransport.png" alt='logo Transport' id="logo"/>
        {data.transports.map((e) => {

       
            return(
                
                <Cards name={e.name} description={e.description}/>
            )
        }
        )}
            
</div>)
    
}
export default AllCardTransports