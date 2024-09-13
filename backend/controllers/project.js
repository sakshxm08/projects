const mongoose = require("mongoose");
const Project = require("../models/projectModel");

// GET all Projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add a Project
const addProject = async (req, res) => {
  const projectDetails = req.body;
  const logo = req.files?.["logo"][0]?.location;
  const poster = req.files?.["poster"][0]?.location;

  if (!logo || !poster) {
    return res.status(400).json({ error: "Logo and poster are required" });
  }

  try {
    const project = await Project.create({ ...projectDetails, logo, poster });
    res.status(201).json(project);
  } catch (err) {
    console.error("Error adding project:", err);
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: "Internal server error" });
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
