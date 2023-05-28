import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation().pathname;

  return (
    <Navbar
      className="sticky-top"
      variant="dark"
      bg="black"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        {location === '/' ? (
          <Navbar.Brand href="#">Damian Goodenough</Navbar.Brand>
        ) : (
          <Navbar.Brand as={Link} to="/">
            Damian Goodenough
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            {location === '/' ? (
              <>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/">
                Home
                <i className="fa-solid fa-house" />
              </Nav.Link>
            )}
            <Nav.Link onClick={() => window.open('./resume.pdf')}>
              Resumé
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              All Projects
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/li-posts">
              LI Posts
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
