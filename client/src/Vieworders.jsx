import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import swal from "sweetalert";

function Vieworders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/vieworders").then((display) => {
      setOrders(display.data);
    });
  }, [orders]);

  const PageSize = 4;

  const handleDelete = (event, orderId) => {
    event.preventDefault();

    swal({
      title: "Are you sure?",      
      buttons: ["No", "Yes"],
      dangerMode: true
    }).then(async function (isConfirm) {
      if (isConfirm) {
        const display = await axios.delete(
          `http://localhost:4000/deleteorder/${orderId}`
        );

        if (display.data === "Deleted!") {
          swal({
            title: "Deleted",            
            icon: "success",
            buttons: false,
            timer: 1000
          })
        }
      } 
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  let sl = (currentPage - 1) * PageSize;

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-75 ms-auto me-3 mt-3">
      <h1 className="text-primary">Orders</h1>
      <Table bordered hover className="mt-3">
        <thead>
          <tr>
            <th>S No</th>
            <th>Product ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Number of Products</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .slice((currentPage - 1) * PageSize, currentPage * PageSize)
            .map((o) => (
              <tr key={o._id}>
                <td>{(sl = sl + 1)}</td>
                <td>{o.productId}</td>
                <td>{o.firstName}</td>
                <td>{o.lastName}</td>
                <td>{o.productNum}</td>
                <td>{o.date}</td>
                <td>
                  <a href={`/updateorder/${o._id}`}>
                    <BsFillPencilFill />
                  </a>{" "}
                  <a href="" onClick={(event) => handleDelete(event, o._id)}>
                    <BsFillTrashFill />
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={prevPage}
        >
          Prev
        </button>{" "}
        &nbsp;
        <span>Page No: {currentPage}</span> &nbsp;
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Vieworders;
