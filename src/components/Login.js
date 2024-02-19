import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// Modify the Login component to accept props
function Login({ show, onHide }) {
  return (
    <div className="login-modal" >
      <Modal show={show} onHide={onHide} 
     centered className="login-modal">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title-centered">Sign In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div class="form-container">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
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
