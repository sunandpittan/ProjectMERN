const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../userSchema");
const express = require("express");
const app = express();

const Signin = async (req, res) => {
  const { username, password } = req.body;
  const Userid = await User.findOne({ username });

  if (Userid && (await bcrypt.compare(password, Userid.password))) {
    res.json({
      message: "Login successful",
      token: tokengenerate(Userid._id),
      username: Userid.username,
      role: Userid.role
    });
  } else {
    res.json("Login failed");
  }
};

const tokengenerate = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = Signin;
