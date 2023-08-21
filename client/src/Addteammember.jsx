import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Addteammember() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [phonenum, setPhoneNum] = useState("");
  const [profpic, setProfpic] = useState("");

  const navigate = useNavigate();

  const handleAdd = async (event) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:4000/addteammember", {
      name,
      email,
      dob,
      gender,
      role,
      phonenum,
      profpic
    });

    if (name === display.data.name) {
      navigate("/viewteammembers");
      swal({
        title: "Added",
        icon: "success",
        timer: 1000,
        buttons: false
      });
    }
  };

  return (
    <div className="w-75 ms-auto mt-3 me-3">
      <h1 className="text-primary">Add a team member</h1>
      <Form className="border border-dark p-4 rounded w-75">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDob">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            className="w-25"
            type="date"
            placeholder="Enter DOB"
            value={dob}
            onChange={(event) => {
              setDob(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <br />
          <Form.Check
            inline
            label="Male"
            name="group1"
            type="radio"
            id="inline-radio-1"
            onClick={() => setGender("Male")}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type="radio"
            id="inline-radio-2"
            onClick={() => setGender("Female")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRole">
          <Form.Label>Role</Form.Label>
          <Form.Select
            className="w-25"
            value={role}
            onChange={(event) => {
              setRole(event.target.value)
            }}
          >
            <option>Select</option>
            <option>Admin</option>
            <option>By Admin</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className="w-25"
            type="number"
            placeholder="Enter number"
            value={phonenum}
            onChange={(event) => {
              setPhoneNum(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProfpic">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url"
            value={profpic}
            onChange={(event) => {
              setProfpic(event.target.value)
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleAdd}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Addteammember;
