import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar
      className="sticky-top"
      variant="dark"
      bg="black"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="#home">Damian Goodenough</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
