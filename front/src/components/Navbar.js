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
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid>
        
          <Navbar.Brand href="/">
            <img
              alt=""
              src="logonoir.png"
              width="300"
              height="70"
              className="d-inline-block align-top logo"
            />
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
            <Nav.Link className='transport' href="transport" ><img src="\img\logos\logoTransport.png" alt='' />Transport  </Nav.Link>
            <Nav.Link className='hebergement' href="hebergements"><img src="\img\logos\logoHotel.png" alt=''  />Où Dormir </Nav.Link>
            <Nav.Link className='resto' href="restauration"> <img src="\img\logos\logoResto.png" alt='' />Où Manger</Nav.Link>
            <Nav.Link className='sport' href="sport"><img  src="\img\logos\logoSalle.png" alt='' />Centre Sportifs </Nav.Link>
          </Nav>
          <img
              alt=""
              src="\img\logos\MarseilleTerreAccueil.png"
              width="250"
              height="300"
              className="d-inline-block align-top logo logoMarseille"
            />{' '}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;