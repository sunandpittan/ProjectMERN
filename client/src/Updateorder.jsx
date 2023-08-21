import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

function Updateorder() {

  const { id } = useParams();
  const [productId, setProductId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [productNum, setProductNum] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/vieworder/${id}`).then((display) => {
      setProductId(display.data.productId);
      setFirstName(display.data.firstName);
      setLastName(display.data.lastName);
      setProductNum(display.data.productNum);
      setDate(display.data.date);
    });
  }, []);

  const navigate = useNavigate();

  const handleUpdate = async (event) => {
    event.preventDefault();
    const display = await axios.put(`http://localhost:4000/updateorder/${id}`, {
      productId,
      firstName,
      lastName,
      productNum,
      date
    });

    if (productId === display.data.productId) {
      navigate("/vieworders");
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
      <h1 className="text-primary">Update an order</h1>
      <Form className="border border-dark p-3 rounded w-75">
        <Form.Group className="mb-3" controlId="formProductid">
          <Form.Label>Product ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product ID"
            value={productId}
            onChange={(event) => {
              setProductId(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductnum">
          <Form.Label>Number of Product</Form.Label>
          <Form.Control
          className="w-25"
            type="number"
            placeholder="Enter number"
            value={productNum}
            onChange={(event) => {
              setProductNum(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            className="w-25"
            type="date"
            placeholder="Enter date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value)
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

export default Updateorder;
