import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Viewbook() {

  const { id } = useParams();
  const [book, setBook] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/viewbook/${id}`).then((display) => {
      setBook(display.data);
    });
  }, []);

  return (
    <div className="w-75 ms-auto mt-3 me-3">
      <h1 className="text-primary">Book Details</h1>
      <Card className="text-center w-50">
        <Card.Img
          variant="top"
          style={{ width: "25%", height: "25%" }}
          className="border rounded mx-auto mt-3"
          src={book.bookImage}
        />
        <Card.Body>
          <Card.Title>{book.bookName}</Card.Title>
          <Card.Text>
            Author: {book.author}
            <br />
            Publications Name: {book.publicationsName}
            <br />
            Price: ₹ {book.price}
            <br />
            Availability: {book.availability}
          </Card.Text>          
        </Card.Body>
      </Card>
    </div>
  );
}

export default Viewbook;
