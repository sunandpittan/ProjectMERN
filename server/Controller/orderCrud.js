const order = require("../orderSchema");

const createOrder = async (req, res) => {
  const { productId, firstName, lastName, productNum, date } = req.body;
  const orderDetails = await order.create({
    productId,
    firstName,
    lastName,
    productNum,
    date
  });
  res.json(orderDetails);
};

const getOrders = async (req, res) => {
  const getOrds = await order.find();
  res.json(getOrds);
};

const getOrder = async (req, res) => {
  const _id = req.params.id;
  const getOrd = await order.findOne({ _id });
  res.json(getOrd);
};

const updateOrder = async (req, res) => {
  const { productId, firstName, lastName, productNum, date } = req.body;
  const _id = req.params.id;
  const updateOrders = await order.findByIdAndUpdate(_id, {
    productId,
    firstName,
    lastName,
    productNum,
    date
  });
  res.json(updateOrders);
};

const deleteOrder = async (req, res) => {
  const _id = req.params.id;
  const deleteOrders = await order.findByIdAndDelete(_id);
  res.json("Deleted!");
};

module.exports = { createOrder, getOrder, getOrders, updateOrder, deleteOrder };
