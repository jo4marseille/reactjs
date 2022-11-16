import React from "react";
import { useState } from 'react';
import "./Evenements.css";
import { event } from "../../assets/img/data";
import coeurNoir from '../../assets/img/coeurNoir.png';
import { NavLink } from "react-router-dom";


const Evenements = () => {

  const [count, setCount ] = useState(235)

  return (
   <ul className="flex flex-col">
    {event.map(({id,img,desc,sport,lieu,date}) => (

      <li className="bg-gray-200 w-2/3 h-96 mx-auto mt-20 rounded-xl hover:bg-orange-400 duration-300 cursor-pointer" key={id}>
        <div className="flex justify-between items-center">
          <img src={img} alt="photo_event" className="w-1/2 rounded-xl object-cover mt-5 ml-5"/>
          <div className="w-1/2 relative">
            <h2 className="text-4xl font-bold">{sport}</h2>
            <h3 className="text-xl font-semibold">{desc}</h3>
            <p className="mt-5 font-light">{date}</p>
            <p className="font-bold">{lieu}</p>
            <p className="flex absolute top-48 left-72" onClick={() => setCount(count + 1)}><img src={coeurNoir} alt="" className="i-size" /><p className="ml-2">{count}</p></p>
          </div>
        </div>
      </li>
    
    ))}
    
   </ul>
   
  );
};

export default Evenements;