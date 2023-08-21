import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

function Updateteammember() {

  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [profpic, setProfpic] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/viewteammember/${id}`).then((display) => {
      setName(display.data.name);
      setEmail(display.data.email);
      setDob(display.data.dob);
      setGender(display.data.gender);
      setRole(display.data.role);
      setPhonenum(display.data.phonenum);
      setProfpic(display.data.profpic);
    });
  }, []);

  const navigate = useNavigate();

  const handleUpdate = async (event) => {
    event.preventDefault();
    const display = await axios.put(
      `http://localhost:4000/updateteammember/${id}`,
      { name, email, dob, gender, role, phonenum, profpic }
    );

    if (name === display.data.name) {
      navigate("/viewteammembers");
      swal({
        title: "Updated",
        icon: "success",
        timer: 1000,
        buttons: false
      });
    }
  };

  return (
    <div className="w-75 ms-auto mt-3 me-3">
      <h1 className="text-primary">Update a team member</h1>
      <Form className="border border-dark p-3 rounded w-75">
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
            checked={gender==="Male"?true:false}
            onChange={() => setGender("Male")}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type="radio"
            id="inline-radio-2"
            checked={gender==="Female"?true:false}
            onChange={() => setGender("Female")}
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

        <Form.Group className="mb-3" controlId="formPhonenum">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
          className="w-25"
            type="number"
            placeholder="Enter number"
            value={phonenum}
            onChange={(event) => {
              setPhonenum(event.target.value)
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

        <Button variant="primary" type="submit" onClick={handleUpdate}>
          Submit
        </Button>
      </Form>
      <p></p>
    </div>
  );
}

export default Updateteammember;
