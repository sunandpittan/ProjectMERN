const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  bookName: { type: String },
  author: { type: String },
  publicationsName: { type: String },
  price: { type: Number },
  availability: { type: String },
  bookImage: { type: String }
});

const book = mongoose.model("book", bookSchema);

module.exports = book;
