import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import MobuliWord from "../images/mobuli-word.png";
import LoginButton from "./LoginButton";
import { getLoggedInUserName, isUserLoggedIn, logOut} from "../service/AuthService";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NavbarMain() {

  const isAuth = isUserLoggedIn();
  const [userID, setUserID] = useState("");

  const navigator = useNavigate();

  function handleLogout() {
    logOut();
    navigator("/");
  }
  
useEffect(() => {
  if (isAuth && userID === "") {
    setUserID(getLoggedInUserName());
  }

  // Optional: Return a cleanup function if needed
  return () => {
    // Cleanup logic here
  };
}, [isAuth, userID]); // Add dependencies if necessary



  return (
    // Customized Bootstrap Navbar
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Brand logo with a link to the home page */}
        <Navbar.Brand href="/">
          <img src={MobuliWord} alt="Mowali" className="mowali-brand-logo" />
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
            <Nav.Link className="nav-links" href="/watchlist">
              Watch List
            </Nav.Link>
            {/* Link to the "Randomizer" page */}
            <Nav.Link className="nav-links" href="/random">
              Randomizer
            </Nav.Link>
            {/* Link to a test page that shows a 404 error */}
            {/* <Nav.Link className="nav-links" href="/test">Test 404</Nav.Link>*/}

            {!isAuth && <LoginButton />}

            <p className="logged-in-user">
              {isAuth && "Welcome, " + userID}
              {/* {userID} */}
            </p>

            {isAuth && (
              <NavLink to="" className="log-out-link" onClick={handleLogout}>
                Log out
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Export the NavbarMain component to be used in other parts of the application
export default NavbarMain;
