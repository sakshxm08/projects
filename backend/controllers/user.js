const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ username, password: hash });
    console.log(username);
    res.status(200).json({ username, _id: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) throw Error("Invalid username");
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw Error("Incorrect password");

    console.log(user);
    res.status(200).json({ username, _id: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { signup, login };
