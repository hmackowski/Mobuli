import React from "react";
import logoText from "../images/mobuli-word.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// LandingText component to display the landing page text content
function LandingText() {
  return (
    <div>
      {/* Main heading */}
      <h1 className="landing-text-title">
        Welcome to <img src={logoText} className="welcome-logo-text" alt="Mobuli" />
      </h1>
      {/* Subheading */}
      <p>(Movie Bucket List)</p>
      {/* Description of the application */}
      <p className="landing-text-description">
        Your one-stop destination for organizing and managing all your favorite
        movies! With Mowali, you can curate your personalized movie watch list
        and never miss a blockbuster again. Easily search for movies, explore
        detailed information, and add them to your watch list with just a click.
        Whether you're a film enthusiast or just looking to unwind with some
        entertainment, Mowali has got you covered. Embrace the ultimate
        movie-watching experience and take control of your cinema journey.
      </p>
      {/* Features section */}
      <p className="landing-text-features">Explore our amazing features:</p>
      <ul className="landing-text-feature-list">
        {/* List of features */}
        <li>Create and manage your personalized movie watch list</li>
        <li>Find movie details and information</li>
        <li>
          Use the movie randomizer to discover a surprise from your watch list
        </li>
      </ul>
      {/* Call-to-action */}
      <p className="landing-text-start">
        Lights, camera, Mobuli - Your cinematic journey begins here!
      </p>
      {/* Button to navigate to the watchlist page */}
      <Link to="/watchlist">
        <Button className="get-started-button" variant="outline-secondary">Get Started</Button>
      </Link>
    </div>
  );
}

// Export the LandingText component to be used in other parts of the application
export default LandingText;
