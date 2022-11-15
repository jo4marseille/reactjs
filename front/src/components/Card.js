import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards(props) {

  // console.log(data);

  return (

    <> 
   
      <Card style={{ width: '18rem',margin:'10px', height: '40rem' }} className="d-inline-flex">
        <Card.Img className="card-img-top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <a href={props.lien}> <Button variant="primary">En savoir plus</Button></a>
        </Card.Body>
        
      </Card>
      
    </>
  );
}



export default Cards;
