import React from 'react'
import Tram from '../assets/images/tram-marker.png';
import Metro from '../assets/images/metro-marker.png';
import Marina from  '../assets/images/marina-marker.png';
import Velodrome from '../assets/images/velodrome-marker.png';
import Geoloc from '../assets/images/geoloc-marker.png';

import '../assets/Legende.css';

function Legende() {
  return (
    <div className='legende-container'>
      <div className='legende-row'><img src={Tram} alt="tram"  className='marker'/>  Tramway</div>
      <div className='legende-row'><img src={Metro} alt="metro"  className='marker'/>   Metro</div>
      <div className='legende-row'><img src={Marina} alt="marina"  className='marker'/>   Marina (Voile)</div>
      <div className='legende-row'><img src={Velodrome} alt="velodrome"  className='marker'/>   Stade Vélodrome </div>
      <div className='legende-row'><img src={Geoloc} alt="geoloc"  className='marker'/>   Votre Position </div>
    </div>
  )
}

export default Legende