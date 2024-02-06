const express = require("express");
const { addProject, getAllProjects } = require("../controllers/project");

const router = express.Router();
// Get a Project - Route
router.get("/", getAllProjects);
// Post a Project - Route
router.post("/", addProject);

module.exports = router;
