import axios from "axios";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MyNavbar from "../components/MyNavbar";
import { Button, Container, Form } from "react-bootstrap";

export default function Login() {

  const email = useRef(); 
  const password = useRef(); 

  const history = useHistory();

  const loginHandler = async (e) => {
    e.preventDefault();
    const loginData = {
      "email": email.current.value,
      "password": password.current.value
    };

    try {
      const response = await axios.post("https://api.dynoacademy.com/test-api/v1/login", loginData, {
        timeout: 1000,
      });


      const getAccessToken = response.data.accessToken;

      localStorage.setItem("accessToken", getAccessToken);

      if (response.data.status === 'success') {
        alert("Logged in successfully");
      }

      history.replace("/")
      
    } catch (error) {
      
      if (error.response) {
        
        alert(error.response.data.errors[0].message);
      } else {
        alert("Unknown error occured. Try again later")
      }
    }
  }
  return (
    <>
      <MyNavbar />
      <Container>
      <form action="" onSubmit={loginHandler}>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email} autoComplete={false} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password}/>
      </Form.Group> 
       
        
         <Button variant="dark" type="submit">
        Login
      </Button>
        </form>
        </Container>
    </>
  );
}
