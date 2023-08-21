const cart = require("../cartSchema");

const createCart = async (req, res) => {
  const { userName, bookName, price, qty } = req.body;
  const cartDetails = await cart.findOne({
    $and: [{ userName: userName }, { bookName: bookName }],
  });
  if (cartDetails) {
    res.json("alreadyExists");
  } else {
    const cartDetails = await cart.create({
      userName,
      bookName,
      price,
      qty
    });
    res.json(cartDetails);
  }
};

const getCart = async (req, res) => {
  const id = req.params.id;
  const getCrt = await cart.find({ userName: id });
  res.json(getCrt);
};

const updateCart = async (req, res) => {
  const { qty } = req.body;
  const _id = req.params.id;
  const updateCrt = await cart.findByIdAndUpdate(_id, { qty });
  res.json(updateCrt);
};

const deleteCart = async (req, res) => {
  const _id = req.params.id;
  const deleteCrt = await cart.findByIdAndDelete(_id);
  res.json("Deleted!");
};

module.exports = { createCart, getCart, updateCart, deleteCart };
