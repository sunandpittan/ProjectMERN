import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsFillEyeFill, BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import swal from "sweetalert";

function Viewteammembers() {
  const [teammembers, setTeammembers] = useState([]);
  let sl = 0;

  useEffect(() => {
    axios.get("http://localhost:4000/viewteammembers").then((display) => {
      setTeammembers(display.data);
    });
  }, [teammembers]);

  const handleDelete = async (event, tmId) => {
    event.preventDefault();
    swal({
      title: "Are you sure?",      
      buttons: ["No", "Yes"],
      dangerMode: true
    }).then(async function (isConfirm) {
      if (isConfirm) {
        const display = await axios.delete(
          `http://localhost:4000/deleteteammember/${tmId}`
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

  return (
    <div className="w-75 ms-auto me-3 mt-3">
      <h1 className="text-primary">Team Members</h1>

      <Table bordered hover className="mt-3">
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Phone Number</th>            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teammembers.map((t) => (
            <tr key={t._id}>
              <td>{(sl = sl + 1)}</td>
              <td>{t.name}</td>
              <td>{t.email}</td>
              <td>{t.dob}</td>
              <td>{t.gender}</td>
              <td>{t.role}</td>
              <td>{t.phonenum}</td>              
              <td>
                <a href={`/viewteammember/${t._id}`}>
                  <BsFillEyeFill />
                </a>{" "}
                <a href={`/updateteammember/${t._id}`}>
                  <BsFillPencilFill />
                </a>{" "}
                <a href="" onClick={(event) => handleDelete(event, t._id)}>
                  <BsFillTrashFill />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Viewteammembers;
