import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Viewteammember() {
  const { id } = useParams();

  const [teammember, setTeammember] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/viewteammember/${id}`).then((display) => {
      setTeammember(display.data);
    });
  }, []);

  return (
    <div className="w-75 ms-auto mt-3 me-3">
      <h1 className="text-primary">Team member details</h1>
      <Card className="w-50 text-center">
        <Card.Img
          variant="top"
          style={{ width: "25%", height: "25%" }}
          className="rounded mx-auto d-block mt-3"
          src={teammember.profpic}
        />
        <Card.Body>
          <Card.Title>{teammember.name}</Card.Title>
          <Card.Text>
            Email: {teammember.email}
            <br />
            DOB: {teammember.dob}
            <br />
            Gender: {teammember.gender}
            <br />
            Role: {teammember.role}
            <br />
            Phone: {teammember.phonenum}
            <br />
          </Card.Text>          
        </Card.Body>
      </Card>
    </div>
  );
}

export default Viewteammember;
