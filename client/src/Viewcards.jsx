import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import swal from "sweetalert";

function Viewcards() {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/viewbooks").then((display) => {
      setBooks(display.data);
    });
  }, []);

  const handleAdd = async (event, userName, bookName, price, qty) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:4000/addtocart", {
      userName,
      bookName,
      price,
      qty
    });
    if (display.data === "alreadyExists") {
      swal({
        title: "Already in cart",
        icon: "warning",
        buttons: false,
        timer: 1000
      });
    } else {
      swal({
        title: "Added",
        icon: "success",
        buttons: false,
        timer: 1000
      });
    }
  };

  return (
    <div>
      {books.map((b) => (
        <Card
          key={b._id}
          style={{ width: "18rem", height: "22rem" }}
          className="float-start col-md-3 text-center mt-3 ms-3"
        >
          <Card.Img
            variant="top"
            src={b.bookImage}
            style={{ width: "100px" }}
            className="mx-auto"
          />
          <Card.Body>
            <Card.Title>{b.bookName}</Card.Title>
            <Card.Text className="text-start">
              Author: {b.author}
              <br />
              Publications: {b.publicationsName}
              <br />
              Price: ₹ {b.price}
              <br />
              Availability: {b.availability}
            </Card.Text>
            <Button
              variant="primary"
              href=""
              onClick={(event) =>
                handleAdd(event, userInfo.username, b.bookName, b.price, 1)
              }
            >
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Viewcards;
