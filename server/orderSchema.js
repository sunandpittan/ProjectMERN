const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  productId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  productNum: { type: Number },
  date: { type: String }
});

const order = mongoose.model("order", orderSchema);

module.exports = order;
