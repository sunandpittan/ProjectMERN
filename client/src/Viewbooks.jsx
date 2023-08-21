import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsFillEyeFill, BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import swal from "sweetalert";

function Viewbooks() {
  const [books, setBooks] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/viewbooks").then((display) => {
      setBooks(display.data);
    });
  }, [books]);

  const handleDelete = async (event, bookId) => {
    event.preventDefault();
    swal({
      title: "Are you sure?",      
      buttons: ["No", "Yes"],
      dangerMode: true
    }).then(async function (isConfirm) {
      if (isConfirm) {
        const display = await axios.delete(
          `http://localhost:4000/deletebook/${bookId}`
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

  const PageSize = 4;

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
      <h1 className="text-primary">Books</h1>
      <label>
        Search <input type="text" onChange={handleSearch} />
      </label>
      <Table bordered hover className="mt-3">
        <thead>
          <tr>
            <th>S No</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publications Name</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books
            .filter(
              (row) =>
                !searchVal.length ||
                row.bookName
                  .toString()
                  .toLowerCase()
                  .includes(searchVal.toString().toLowerCase())
            )

            .slice((currentPage - 1) * PageSize, currentPage * PageSize)
            .map((b, index, data) => (
              <tr key={b._id}>
                <td>{(sl = sl + 1)}</td>
                <td>{b.bookName}</td>
                <td>{b.author}</td>
                <td>{b.publicationsName}</td>
                <td>₹ {b.price}</td>
                <td>{b.availability}</td>
                <td>
                  <a href={`/viewbook/${b._id}`}>
                    <BsFillEyeFill />
                  </a>{" "}
                  <a href={`/updatebook/${b._id}`}>
                    <BsFillPencilFill />
                  </a>{" "}
                  <a href="" onClick={(event) => handleDelete(event, b._id)}>
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

export default Viewbooks;
