
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} >
          <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="logonoir.png"
              width="300"
              height="70"
              className="d-inline-block align-top logo"
            />{' '}
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav>
            <Nav.Link href="transport" >Transport </Nav.Link>
            <Nav.Link href="hebergements">Où Dormir</Nav.Link>
            <Nav.Link href="restauration">Où Manger</Nav.Link>
            <Nav.Link href="sport">Centre Sportifs</Nav.Link>
          </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;