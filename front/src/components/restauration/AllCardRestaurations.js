import React from "react";
import Card from "../Card";
// import Card from 'react-bootstrap/Card';
import data from "../../data.json";
// import Button from 'react-bootstrap/Button';

function AllCardRestaurations() {

    return(<div className="componentBg">   
           <img src="\img\logos\logoResto.png" alt='logo logo Restauration' id="logo"/>

        {data.restaurants.map((e) => {
            return(
                <Card name={e.name} description={e.description} image={e.image}/>
            )
        }
        )}

    </div>
)}

export default AllCardRestaurations