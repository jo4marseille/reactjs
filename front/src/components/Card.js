import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {

  // console.log(data);

  return (

    <>
      <Card style={{ width: '18rem' ,margin:'4px'}} className='d-inline-flex'>
      <Card.Img className="card-image-top" src={props.image}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>
  );
}



export default Cards;
