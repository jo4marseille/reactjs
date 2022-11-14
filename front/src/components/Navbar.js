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
            <Nav.Link href="transport">Transports</Nav.Link>
            <Nav.Link href="hebergements">Où dormir ?</Nav.Link>
            <Nav.Link href="restauration">Où manger ?</Nav.Link>
            <Nav.Link href="sport">Centres sportifs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;