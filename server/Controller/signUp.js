const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../userSchema");

const Signup = async (req, res) => {
  const { username, password, role } = req.body;

  const Userdata = await User.findOne({ username });

  if (Userdata) {
    res.json("Username already exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const Userdetails = await User.create({
      username,
      password: hashedpassword,
      role
    });
    res.json(Userdetails);
  }
};

module.exports = Signup;
