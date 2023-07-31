import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import MobuliWord from "../images/mobuli-word.png";

// ... Other imports and code ...

function NavbarMain() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={MobuliWord} alt="Mowali" className='mowali-brand-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-color"> {/* This will be on the left */}
            {/* Other links can be added here if needed */}
          </Nav>
          <Nav className="text-color ms-auto"> {/* This will be on the right */}
            <Nav.Link className="nav-links" href="/watchlist">Watch List</Nav.Link>
            <Nav.Link className="nav-links" href="/random">Randomizer</Nav.Link>
            <Nav.Link className="nav-links" href="/test">Test 404</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
