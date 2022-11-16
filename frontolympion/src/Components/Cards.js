import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Css/Presents.css";

function Cards({ value }) {
  return (
    <Card className="size_card" style={{ width: "18rem" }}>
      <Card.Img className="size_image" variant="top" src={value.img} />
      <Card.Body>
        <Card.Title className="card_font_title">{value.type}</Card.Title>
        <Card.Text className="card_font_body">{value.descritpion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
