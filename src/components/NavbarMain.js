import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import MobuliWord from "../images/mobuli-word.png";
import LoginButton from './LoginButton';

function NavbarMain() {
  return (
    // Customized Bootstrap Navbar
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Brand logo with a link to the home page */}
        <Navbar.Brand href="/">
          <img src={MobuliWord} alt="Mowali" className='mowali-brand-logo' />
        </Navbar.Brand>
        {/* Hamburger icon for toggling the navbar on smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links on the left side of the navbar */}
          <Nav className="me-auto text-color">
            {/* Additional links can be added here if needed */}
          </Nav>
          {/* Links on the right side of the navbar */}
          <Nav className="text-color ms-auto">
            {/* Link to the "Watch List" page */}
            <Nav.Link className="nav-links" href="/watchlist">Watch List</Nav.Link>
            {/* Link to the "Randomizer" page */}
            <Nav.Link className="nav-links" href="/random">Randomizer</Nav.Link>
            {/* Link to a test page that shows a 404 error */}
           {/* <Nav.Link className="nav-links" href="/test">Test 404</Nav.Link>*/}
            <LoginButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Export the NavbarMain component to be used in other parts of the application
export default NavbarMain;
