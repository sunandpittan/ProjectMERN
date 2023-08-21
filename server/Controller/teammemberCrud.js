const teammember = require("../teammemberSchema");

const createTeammember = async (req, res) => {
  const { name, email, dob, gender, role, phonenum, profpic } = req.body;
  const teammemberDetails = await teammember.create({
    name,
    email,
    dob,
    gender,
    role,
    phonenum,
    profpic
  });
  res.json(teammemberDetails);
};

const getTeammembers = async (req, res) => {
  const getTms = await teammember.find();
  res.json(getTms);
};

const getTeammember = async (req, res) => {
  const _id = req.params.id;
  const getTm = await teammember.findOne({ _id });
  res.json(getTm);
};

const updateTeammember = async (req, res) => {
  const { name, email, dob, gender, role, phonenum, profpic } = req.body;
  const _id = req.params.id;
  const updateTeammembers = await teammember.findByIdAndUpdate(_id, {
    name,
    email,
    dob,
    gender,
    role,
    phonenum,
    profpic
  });
  res.json(updateTeammembers);
};

const deleteTeammember = async (req, res) => {
  const _id = req.params.id;
  const deleteTeammembers = await teammember.findByIdAndDelete(_id);
  res.json("Deleted!");
};

module.exports = {
  createTeammember,
  getTeammember,
  getTeammembers,
  updateTeammember,
  deleteTeammember
};
