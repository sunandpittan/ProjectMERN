import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

function Welcome() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/viewbooks").then((display) => {
      setBooks(display.data);
    });
  }, []);

  return (
    <div className="w-100 d-flex">
      <div className="w-25 me-auto ms-5 mt-5">
        <Carousel
          className="p-3 border border-secondary rounded"
          indicators={false}
          controls={false}
          fade={true}
        >
          {books.map((b) => (
            <Carousel.Item interval={500} key={b._id}>
              <img
                className="d-block mx-auto"
                style={{ height: "400px" }}
                src={b.bookImage}
                alt="Slides"
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="w-25 mx-auto mt-5">
        <h1 className="text-primary text-center mt-5 pt-5">
          India's
          <br />
          No.1
          <br />
          Online
          <br />
          Book Store
        </h1>
      </div>

      <div className="w-25 ms-auto me-5 mt-5">
        <Carousel
          className="p-3 border border-secondary rounded"
          indicators={false}
          controls={false}
          fade={true}
        >
          {books.toReversed().map((b) => (
            <Carousel.Item interval={500} key={b._id}>
              <img
                className="d-block mx-auto"
                style={{ height: "400px" }}
                src={b.bookImage}
                alt="Slides"
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Welcome;
