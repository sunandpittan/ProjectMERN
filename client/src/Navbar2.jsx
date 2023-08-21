import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navbar2() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" className="">
        <Container>
          <Navbar.Brand href="/">Book Store</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/signin">
              <button type="button" className="btn btn-sm btn-outline-light">
                Sign in
              </button>
            </Nav.Link>
            <Nav.Link href="/signup">
              <button type="button" className="btn btn-sm btn-outline-light">
                Sign up
              </button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar2;
