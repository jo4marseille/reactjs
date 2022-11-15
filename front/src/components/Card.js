import React from 'react';

import Card from 'react-bootstrap/Card';

function FinalCard() {
  return (
        <div className='my-containt'>
          <Card style={{backgroundColor:  '#fff', marginBottom: '70px', height: '600px', border: "solid #0282C8 12px" , borderRadius: "100px 0px", boxShadow: "0 3px 10px #000000a6", overflow: 'hidden'}}
            className="text-center">
           
            <Card.Header style={{backgroundImage: 'url("https://i.ibb.co/H71FK9S/conso.png")',
                                backgroundColor: '#0282C8',
                                height: '150px',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'}}>
                                
                                <h2 style={{color: '#fff', fontSize: '60px'}}>Consommation Responsable</h2>
            </Card.Header>

            <Card.Body style={{backgroundColor:  '#f3f3f3d8', borderRadius: "0px 0px 20px 0px"}}>

              <Card.Title> Réduire votre émission de co2 </Card.Title>

              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>

            </Card.Body>
          </Card>
          
          <Card style={{backgroundColor:  '#fff', marginBottom: '70px', height: '600px', border: "solid #00A651 12px" , borderRadius: "100px 0px", boxShadow: "0 3px 10px #000000a6", overflow: 'hidden'}}
            className="text-center">
           
            <Card.Header style={{backgroundImage: 'url("https://i.postimg.cc/nL96n3zm/transport.png")',
                                backgroundColor: '#00A651',
                                height: '150px',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'}}>
                                
                                <h2 style={{color: '#fff', fontSize: '60px'}}>Mobilité Durable</h2>
            </Card.Header>

            <Card.Body style={{backgroundColor:  '#f3f3f3d8', borderRadius: "0px 0px 20px 0px"}}>

              <Card.Title> Réduire votre émission de co2 </Card.Title>

              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>

            </Card.Body>
          </Card>
        </div>
      );
}

export default FinalCard;


