// Header.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className="header-navbar" bg="primary" variant="dark" expand="lg">
      <Container fluid className="header-container">
        <Navbar.Brand href="#home" className="header-brand">
          <img
            src="logo.png"
            width="30"
            height="30"
            className="header-logo d-inline-block align-top"
            alt="Timer App logo"
          />
          Timer App
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="header-toggle"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="header-collapse justify-content-end"
        >
          <Nav className="header-nav">
            <Nav.Link href="#home" className="header-nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="header-nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="header-nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;