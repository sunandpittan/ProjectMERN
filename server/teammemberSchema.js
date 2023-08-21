const mongoose = require("mongoose");

const teammemberSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  dob: { type: String },
  gender: { type: String },
  role: { type: String },
  phonenum: { type: Number },
  profpic: { type: String }
});

const teammember = mongoose.model("teammember", teammemberSchema);

module.exports = teammember;
