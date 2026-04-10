import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function SiteNavbar() {
  return (
    <Navbar expand="md" fixed="top" className="site-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          David Migl
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/resume">
              Resume
            </Nav.Link>
            <Nav.Link href="https://github.com/migld/webdev" target="_blank" rel="noopener noreferrer">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
