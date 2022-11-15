import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards(props) {

  // console.log(data);

  return (

    <> 
   
      <Card style={{ width: '18rem',margin:'4px' }} className="d-inline-flex">
        <Card.Img className="card-img-top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Link to={props.lien}> <Button variant="primary">En savoir plus</Button></Link>
        </Card.Body>
        
      </Card>
      
    </>
  );
}



export default Cards;
