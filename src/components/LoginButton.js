import React from "react";
import Login from "./Login";
import { useState } from "react";
import { Button } from "react-bootstrap";

function LoginButton() {
  // State to manage the visibility of the Login modal
  const [showLogin, setShowLogin] = useState(false);

  // Function to open the login modal
  const handleShowLogin = () => setShowLogin(true);

  // Function to close the login modal
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <div>
      <Button
        className="get-started-button"
        variant="secondary"
        onClick={handleShowLogin}
      >
        Sign In
      </Button>
      {/* Render the Login component and pass the visibility state and close function */}
      {showLogin && <Login show={showLogin} onHide={handleCloseLogin} />}
    </div>
  );
}

export default LoginButton;
