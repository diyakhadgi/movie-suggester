import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function MyNavbar() {
  return (
    <>
      <Navbar className="bg-dark ">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
          <Link to="/" className="text-white">Movie Suggestor</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/add" className="text-white">Add a movie | </Link> 
              </Navbar.Text>
              <Navbar.Text className="text-white">
              {localStorage.getItem("accessToken") ? (
                <>
                  <Link to="/profile" className="text-white">Profile</Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-white">Login</Link>
                </>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
