import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Register() {

  const [firstName, setFirstName] = useState('') ;
  const [lastName, setLastName] = useState('') ;
  const [username, setUsername] = useState('') ;
  const [email, setEmail] = useState('') ;
  const [password, setPassword] = useState('') ;
  const [confirmPassword, setConfirmPassword] = useState('') ;
  const [errorLabel, setErrorLabel] = useState('Already Registered?');


  function handleRegistrationForm(e){

    e.preventDefault();
    if(password == confirmPassword){
      setErrorLabel("Already Registered?")
      const register = {firstName, lastName, username, email, password};
      console.log(register);
    } else{
      setErrorLabel("Passwords do not match.")
    }

  }

  return (
    <Container className="center col-sm-12">
      <h1 className='register-label'>Register</h1>
      <div className='register-form'>
        <Form className='add-top-padding'>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm="3">
              Email address
            </Form.Label>
            <Col sm="9">
              <Form.Control 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              type="email" 
              placeholder="Enter email" 
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicUsername">
            <Form.Label column sm="3">
              Username
            </Form.Label>
            <Col sm="9">
              <Form.Control 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              type="text" 
              placeholder="Username"
              autoComplete="username"
               />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicFirstName">
            <Form.Label column sm="3">
              First Name
            </Form.Label>
            <Col sm="9">
              <Form.Control 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
              type="text" 
              placeholder="First Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicLastName">
            <Form.Label column sm="3">
              Last Name
            </Form.Label>
            <Col sm="9">
              <Form.Control 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
              type="text" 
              placeholder="Last Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
            <Form.Label column sm="3">
              Password
            </Form.Label>
            <Col sm="9">
              <Form.Control 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              type="password" 
              placeholder="Password"
              autoComplete="new-password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicConfirmPassword">
          
            <Col sm={{ span: 9, offset: 3 }}>
              <Form.Control 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password" 
              placeholder="Confirm Password"
              autoComplete="new-password"
               />
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3">
            <Col sm="4">
              <p className={errorLabel === "Passwords do not match." ? "reg-error-text" : ""}>{errorLabel}</p>
              </Col>
              <Col sm="8">
              <a href="/login" className="register-link">
                Log In!
              </a>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={12}>
              <Button 
              variant="primary" 
              type="submit"
              onClick={(e) => handleRegistrationForm(e)}>
                Register
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}

export default Register
