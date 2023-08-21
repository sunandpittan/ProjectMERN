import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFileMinus, BsFilePlus } from "react-icons/bs";
import swal from "sweetalert";

function Viewcart() {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const [cart, setCart] = useState([]);
  let totPrice = 0;

  useEffect(() => {
    axios
      .get(`http://localhost:4000/viewcart/${userInfo.username}`)
      .then((display) => {
        setCart(display.data);
      });
  }, [cart]);

  const incrQty = (event, id, qty) => {
    event.preventDefault();
    qty = qty + 1;
    axios.put(`http://localhost:4000/updatecart/${id}`, { qty });
  };

  const decrQty = (event, id, qty) => {
    event.preventDefault();
    if (qty > 1) {
      qty = qty - 1;
      axios.put(`http://localhost:4000/updatecart/${id}`, { qty });
    }
  };

  const handleDelete = async (event, id) => {
    event.preventDefault();

    swal({
      title: "Are you sure?",      
      buttons: ["No", "Yes"],
      dangerMode: true
    }).then(async function (isConfirm) {
      if (isConfirm) {
        const display = await axios.delete(
          `http://localhost:4000/deletecart/${id}`
        );

        if (display.data === "Deleted!") {
          swal({
            title: "Deleted",
            icon: "success",
            buttons: false,
            timer: 1000
          });
        }
      }
    });
  };

  return (
    <div className="w-100">
      <h1 className="text-primary ms-5 mt-3">Cart Items: {cart.length}</h1>

      {cart.map((c) => (
        <div className="w-50 mt-3 ms-5 p-3 border shadow rounded" key={c._id}>
          <h3>
            {c.bookName}
            <span className="float-end">
              <BsFileMinus onClick={(event) => decrQty(event, c._id, c.qty)} />{" "}
              {c.qty}{" "}
              <BsFilePlus onClick={(event) => incrQty(event, c._id, c.qty)} />
            </span>
          </h3>          
          <p>
            Price: ₹ {c.price} x {c.qty} = ₹ {c.price * c.qty}
            <button
              onClick={(event) => handleDelete(event, c._id)}
              className="float-end btn btn-secondary btn-sm"
            >
              Remove
            </button>
          </p>
          <p style={{ display: "none" }}>
            {(totPrice = totPrice + c.qty * c.price)}
          </p>
        </div>
      ))}
      <div
        className="w-25 p-3 border shadow rounded text-center"
        style={{ position: "fixed", right: 50, top: 150 }}
      >
        <h3>Payment</h3>
        <button className="btn btn-primary mt-5">Pay ₹ {totPrice}</button>        
      </div>
    </div>
  );
}

export default Viewcart;
