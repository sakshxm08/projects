const express = require("express");
const {
  addProject,
  getAllProjects,
  getProject,
} = require("../controllers/project");

const router = express.Router();
// Get all Projects - Route
router.get("/", getAllProjects);
// Get a Project - Route
router.get("/:id", getProject);
// Post a Project - Route
router.post("/", addProject);

module.exports = router;
