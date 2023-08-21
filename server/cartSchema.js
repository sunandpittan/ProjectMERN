const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userName: { type: String },
  bookName: { type: String },
  price: { type: Number },
  qty: { type: Number }
});

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
