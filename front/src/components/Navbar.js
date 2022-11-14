import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="home">
            <img
              alt=""
              src="logoblanc.png"
              width="300"
              height="70"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="transport">Transport</Nav.Link>
            <Nav.Link href="hebergements">Où Dormir</Nav.Link>
            <Nav.Link href="restauration">Où Manger</Nav.Link>
            <Nav.Link href="sport">Centre Sportifs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;