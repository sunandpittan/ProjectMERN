import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Signup(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const role = props.acctyp;

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:4000/signup", {
      username,
      password,
      role
    });

    if (username === display.data.username) {
      swal({
        title: "Success",
        icon: "success",
        buttons: false,
        timer: 1000
      });
      navigate("/signin");
    } else {
      document.getElementById("dispError").innerHTML =
        "Username already exists! Try a different one.";
    }
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <h1 className="text-primary">Sign up {props.acctyp}</h1>
      <Form className="border border-dark p-3 rounded">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value)
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
              setPassword(event.target.value)
              document.getElementById("dispError").innerHTML = "";
            }}
          />
        </Form.Group>
        <p id="dispError" className="text-danger"></p>
        <Button variant="primary" type="submit" onClick={handleSignup}>
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
