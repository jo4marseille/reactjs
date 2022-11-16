import React from 'react';

import Card from 'react-bootstrap/Card';
import Map from './MapRtm';
import MapBio from './Bio';


function FinalCard() {
  return (
        <div className='my-containt'>
          <Card style={{backgroundColor:  '#fff', marginBottom: '80px', height: '700px', border: "solid #0282C8 12px" , borderRadius: "100px 0px", boxShadow: "0 3px 10px #000000a6", overflow: 'hidden'}}
            className="text-center">
           
            <Card.Header style={{backgroundImage: 'url("https://i.ibb.co/H71FK9S/conso.png")',
                                backgroundColor: '#0282C8',
                                height: '150px',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'}}>
                                
                                <h2 style={{color: '#fff', fontSize: '60px', textShadow: "2px 2px 7px rgba(0,0,0,0.6)"}}>Consommation Responsable</h2>
            </Card.Header>

            <Card.Body style={{backgroundColor:  '#f3f3f3d8', borderRadius: "0px 0px 20px 0px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

              <Card.Title style={{fontFamily: "'Poppins', sans-serif", fontSize: '24px'}}> Réduire votre émission de co2 </Card.Title>

              <MapBio/>

            </Card.Body>
          </Card>
          
          <Card style={{backgroundColor:  '#fff', marginBottom: '80px', height: '700px', border: "solid #00A651 12px" , borderRadius: "100px 0px", boxShadow: "0 3px 10px #000000a6", overflow: 'hidden'}}
            className="text-center">
           
            <Card.Header style={{backgroundImage: 'url("https://i.postimg.cc/nL96n3zm/transport.png")',
                                backgroundColor: '#00A651',
                                height: '150px',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'}}>
                                
                                <h2 style={{color: '#fff', fontSize: '60px', textShadow: "2px 2px 7px rgba(0,0,0,0.6)"}}>Mobilité Durable</h2>
            </Card.Header>

            <Card.Body style={{backgroundColor:  '#f3f3f3d8', borderRadius: "0px 0px 20px 0px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

              <Card.Title style={{fontFamily: "'Poppins', sans-serif", fontSize: '24px'}}> Réduire votre émission de co2 </Card.Title>

              <Map/>

            </Card.Body>
          </Card>
        </div>
      );
}

export default FinalCard;


