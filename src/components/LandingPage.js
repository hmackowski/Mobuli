import React from "react";
import Logo from "../images/Mobuli-logo-large.png";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LandingText from "./LandingText";
import logoNoWords from '../images/Mobuli-logo-large-no-words.png'

function LandingPage() {
  return (
    <Container fluid className="landing-container">
      <div className="logo">
        <Row>
          <Col md={6} sm={12} className="logo-image">
            <Link to="/watchlist">
              <img src={logoNoWords} className="img-fluid landing-logo" alt="Mowali Logo" />
            </Link>
          </Col>
          <Col md={5} sm={12} className="col landing-page-text">
            <LandingText />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default LandingPage;
