import React from "react";
import { Nav } from "react-bootstrap";

function Sidebar1() {
  return (
    <div className="position-fixed mt-5 ms-1" style={{ width: "18%" }}>
      <Nav className="flex-column rounded w-100">
        <Nav.Link
          href="/viewbooks"
          className="btn btn-primary text-white w-100"
        >
          Books
        </Nav.Link>
        <Nav.Link
          href="/addbook"
          className="btn btn-primary text-white w-100 mt-1"
        >
          Add Book
        </Nav.Link>
        <Nav.Link
          href="/viewteammembers"
          className="btn btn-primary text-white w-100 mt-3"
        >
          Team Members
        </Nav.Link>
        <Nav.Link
          href="/addteammember"
          className="btn btn-primary text-white w-100 mt-1"
        >
          Add Team Member
        </Nav.Link>
        <Nav.Link
          href="/vieworders"
          className="btn btn-primary text-white w-100 mt-3"
        >
          Orders
        </Nav.Link>
        <Nav.Link
          href="/placeorder"
          className="btn btn-primary text-white w-100 mt-1"
        >
          Place Order
        </Nav.Link>
        <Nav.Link
          href="/adminsignup"
          className="btn btn-primary text-white w-100 mt-3"
        >
          Admin Signup
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar1;
