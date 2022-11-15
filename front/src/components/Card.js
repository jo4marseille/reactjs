import React from 'react';

import Card from 'react-bootstrap/Card';

function FinalCard() {
  return (
        <div className='my-containt'>
          <Card style={{backgroundColor:  '#fff', marginBottom: '70px', height: '600px', border: "solid #0282C8 12px" , borderRadius: "30px 0px 30px 0px",     boxShadow: "0 3px 10px #000000a6"}}
            className="text-center">
           
            <Card.Header style={{backgroundImage: 'url("https://cdn.discordapp.com/attachments/1041735985890852885/1042103545966637056/conso.png")',
                                height: '150px',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: "18px 0px 0px 0px"}}>
                                
                                <h2 style={{color: '#fff', fontSize: '60px'}}>Consommation Responsable</h2>
            </Card.Header>

            <Card.Body style={{backgroundColor:  '#f3f3f3d8', borderRadius: "0px 0px 20px 0px"}}>

              <Card.Title> Réduire votre émission de co2 </Card.Title>

              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>

            </Card.Body>
          </Card>
          
          <Card
            style={{backgroundColor:  '#fff', marginBottom: '64px', height: '500px', border: "solid #00A651 6px" , borderRadius: "30px 0px 30px 0px"}}
            className="text-center"

          >
            <Card.Header style={{backgroundImage: 'url("https://images.unsplash.com/photo-1576244348464-c7d393b6dfc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80")',
                                height: '100px',
                                backgroundPosition: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: "23px 0px 0px 0px"}}>
                                
                                <h2 style={{color: '#fff'}}>Consommation Responsable</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title> Réduire votre émission de co2 </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
}

export default FinalCard;
