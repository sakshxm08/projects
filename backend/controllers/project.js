const mongoose = require("mongoose");
const Project = require("../models/projectModel");

// GET all Projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add a Project
const addProject = async (req, res) => {
  const request = req.body;
  try {
    const project = await Project.create(request);
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET a unique Project
const getProject = async (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid item id" });
  }

  const item = await Project.findById(id);

  if (!item) return res.status(404).json({ error: "No such item" });

  res.status(200).json(item);
};
// const login = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ username });
//     if (!user) throw Error("Invalid username");
//     const match = await bcrypt.compare(password, user.password);
//     if (!match) throw Error("Incorrect password");

//     console.log(user);
//     res.status(200).json({ username, _id: user._id });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

module.exports = { addProject, getAllProjects, getProject };
