import React from 'react';

import Card from 'react-bootstrap/Card';

function finalCard() {
  return (
        <div className='my-containt'>
        
        <Card
          style={{backgroundColor:  '#00A651', marginTop: '64px'}}
          className="text-center"

        >
          <Card.Header>Consommation Responsable</Card.Header>
          <Card.Body>
            <Card.Title> Réduire votre émission de co2 </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
         
        <Card
          style={{backgroundColor:  '#00A651', marginTop: '64px'}}
          className="text-center"

        >
          <Card.Header>Consommation Responsable</Card.Header>
          <Card.Body>
            <Card.Title> Réduire votre émission de co2 </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

         
        <Card
          style={{backgroundColor:  '#fff', marginTop: '64px', border: "solid #00A651 6px" , borderRadius: "30px 0px 30px 0px"}}
          className="text-center"

        >
          <Card.Header>Consommation Responsable</Card.Header>
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

export default finalCard;
