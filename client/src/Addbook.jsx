import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Addbook() {
  const navigate = useNavigate();

  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationsName, setPublicationsName] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("");
  const [bookImage, setBookImage] = useState("");

  const handleAdd = async (event) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:4000/addbook", {
      bookName,
      author,
      publicationsName,
      price,
      availability,
      bookImage
    });

    if (bookName === display.data.bookName) {
      navigate("/viewbooks");
      swal({
        title: "Added",
        icon: "success",
        timer: 1000,
        buttons: false
      });
    }
  };

  return (
    <div className="w-75 mt-3 ms-auto me-3">
      <h1 className="text-primary">Add a book</h1>
      <Form className="border border-dark p-3 rounded w-75">
        <Form.Group className="mb-3" controlId="formBookname">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book name"
            value={bookName}
            onChange={(event) => {
              setBookName(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPublname">
          <Form.Label>Publications Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter publications name"
            value={publicationsName}
            onChange={(event) => {
              setPublicationsName(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price ₹</Form.Label>
          <Form.Control
            className="w-25"
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAvailability">
          <Form.Label>Availability</Form.Label>
          <br />
          <Form.Check
            inline
            label="Available"
            name="group1"
            type="radio"
            id="inline-radio-1"
            onClick={() => setAvailability("Available")}
          />
          <Form.Check
            inline
            label="Not available"
            name="group1"
            type="radio"
            id="inline-radio-2"
            onClick={() => setAvailability("Not available")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Book Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url"
            value={bookImage}
            onChange={(event) => {
              setBookImage(event.target.value)
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

export default Addbook;
