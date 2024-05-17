import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  loginAPICall,
  saveLoggedInUser,
  saveUserInfo,
  storeToken,
} from "../service/AuthService";
import { useNavigate } from "react-router-dom";

// Modify the Login component to accept props
function Login({ show, onHide }) {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [displayLabel, setDisplayLabel] = useState("");

  const navigator = useNavigate();

  async function handleLoginForm(e) {
    e.preventDefault();

    await loginAPICall(emailAddress, password)
      .then((response) => {
        console.log(response.data);
        if (response.data === "User logged in successfully.") {
          onHide(); // Close the modal

          const token = "Basic " + window.btoa(emailAddress + ":" + password);
          storeToken(token);
          saveLoggedInUser(emailAddress);
          saveUserInfo(emailAddress, () => {
            navigator("/watchlist"); // Navigate only after the callback is called
          });

          //window.location.reload(false);
        } else {
          // Handle incorrect credentials here, if needed
          // Maybe display an error message to the user
          setDisplayLabel("Wrong email address or password.");
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle API call error here, if needed
        // Maybe display an error message to the user
      });
  }

  return (
    <div className="login-modal">
      <Modal show={show} onHide={onHide} centered className="login-modal">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title-centered">Sign In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-container">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Email Address"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  autoComplete="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="checkbox-and-link">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <p>New to Mobuli?</p>
                <a href="/register" className="register-link">
                  Sign up Now
                </a>
              </div>
              <p className="reg-error-text">{displayLabel}</p>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleLoginForm(e)}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
