import React from 'react';
import img from '../img/Les héros locaux et les champions du monde.png'

const HeaderImg = () => {
    return (
        <div className="headerimg">
            <img src={img} style={{width:"100%", height:"86vh", objectFit:"contain", backgroundColor:"black"}}/>
        </div>
    );
};

export default HeaderImg;