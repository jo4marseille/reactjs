import React from "react";
import Card from "../Card";
// import Card from 'react-bootstrap/Card';
import data from "../../data.json";
import Button from 'react-bootstrap/Button';

function AllCardRestaurations() {

    return(<div className="componentBg">
        {data.restaurants.map((e) => {

            return(
                <Card name={e.name} description={e.description}/>
            )
        }
        )}
            
        
            </div>);
    
}
export default AllCardRestaurations