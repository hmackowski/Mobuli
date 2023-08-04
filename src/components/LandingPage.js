import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LandingText from "./LandingText";
import logoNoWords from "../images/Mobuli-logo-large2.png";

// LandingPage component for the landing page of the application
function LandingPage() {
  return (
    // Container to hold the entire landing page content with fluid layout
    <Container fluid className="landing-container">
      {/* Logo section */}
      <div className="logo">
        {/* Use Bootstrap's Grid system to display logo and text side-by-side */}
        <Row>
          {/* Logo image column */}
          <Col md={6} sm={12} className="logo-image">
            {/* Link the logo image to the WatchList page */}
            <Link to="/watchlist">
              {/* Display the logo image */}
              <img
                src={logoNoWords}
                className="img-fluid landing-logo"
                alt="Mowali Logo"
              />
            </Link>
          </Col>
          {/* Landing text column */}
          <Col md={5} sm={12} className="col landing-page-text">
            {/* Render the LandingText component */}
            <LandingText />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

// Export the LandingPage component to be used in other parts of the application
export default LandingPage;
