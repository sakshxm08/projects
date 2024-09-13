const express = require("express");
const { login, signup, getCurrentUser } = require("../controllers/user");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

// Login Route
router.post("/login", login);

// Signup Route
router.post("/signup", signup);

// Refresh Token Route
router.get("/me", authMiddleware, getCurrentUser);

module.exports = router;
