const book = require("../bookSchema");

const createBook = async (req, res) => {
  const { bookName, author, publicationsName, price, availability, bookImage } =
    req.body;
  const bookDetails = await book.create({
    bookName,
    author,
    publicationsName,
    price,
    availability,
    bookImage
  });
  res.json(bookDetails);
};

const getBooks = async (req, res) => {
  const getBks = await book.find();
  res.json(getBks);
};

const getBook = async (req, res) => {
  const _id = req.params.id;
  const getBk = await book.findOne({ _id });
  res.json(getBk);
};

const updateBook = async (req, res) => {
  const { bookName, author, publicationsName, price, availability, bookImage } =
    req.body;
  const _id = req.params.id;
  const updateBooks = await book.findByIdAndUpdate(_id, {
    bookName,
    author,
    publicationsName,
    price,
    availability,
    bookImage
  });
  res.json(updateBooks);
};

const deleteBook = async (req, res) => {
  const _id = req.params.id;
  const deleteBooks = await book.findByIdAndDelete(_id);
  res.json("Deleted!");
};

module.exports = { createBook, getBook, getBooks, updateBook, deleteBook };
