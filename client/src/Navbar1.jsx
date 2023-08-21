import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Navbar1() {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const signedIn = JSON.parse(localStorage.getItem("signedin"));
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (signedIn) {
      axios
        .get(`http://localhost:4000/viewcart/${userInfo.username}`)
        .then((display) => {
          setCart(display.data);
        });
    }
  }, [cart, signedIn]);

  return (
    <div>
      <Navbar bg="primary" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="/">Book Store</Navbar.Brand>
          <Nav className="ms-auto">
            {!signedIn ? (
              <>
                <Nav.Link href="/signin">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-light"
                  >
                    Sign in
                  </button>
                </Nav.Link>
                <Nav.Link href="/usersignup">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-light"
                  >
                    Sign up
                  </button>
                </Nav.Link>
              </>
            ) : userInfo.role === "admin" ? (
              <>
                <Nav.Link href="/viewbooks">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-light"
                  >
                    Books
                  </button>
                </Nav.Link>
                <div className="dropdown">
                  <button
                    className="btn btn-success btn-sm border-white dropdown-toggle mt-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userInfo.username}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/"
                        onClick={() => localStorage.clear()}
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : userInfo.role === "user" ? (
              <>
                <Nav.Link href="/viewcards">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-light"
                  >
                    Books
                  </button>
                </Nav.Link>
                <Nav.Link href="/cart">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-light"
                  >
                    Cart <span className="badge bg-danger">{cart.length}</span>
                  </button>
                </Nav.Link>
                <div className="dropdown">
                  <button
                    className="btn btn-success btn-sm border-white dropdown-toggle mt-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userInfo.username}
                  </button>
                  <ul className="dropdown-menu flex">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/"
                        onClick={() => localStorage.clear()}
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
