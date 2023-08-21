import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (event) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:4000/signin", {
      username,
      password
    });

    localStorage.setItem("userinfo", JSON.stringify(display.data));

    if (display.data.message === "Login successful") {
      localStorage.setItem("signedin", JSON.stringify(true));
    } else {
      localStorage.setItem("signedin", JSON.stringify(false));
    }

    if (display.data.token && display.data.role === "admin") {
      navigate("/viewbooks");
    } else if (display.data.token && display.data.role === "user") {
      navigate("/viewcards");
    } else {
      document.getElementById("dispError").innerHTML =
        "Login failed! Check username and password.";
    }
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <h1 className="text-primary">Sign in</h1>
      <Form className="border border-dark p-3 rounded">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              document.getElementById("dispError").innerHTML = "";
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              document.getElementById("dispError").innerHTML = "";
            }}
          />
        </Form.Group>
        <p id="dispError" className="text-danger"></p>
        <Button variant="primary" type="submit" onClick={handleSignin}>
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default Signin;
