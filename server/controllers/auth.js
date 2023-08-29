const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const register = expressAsyncHandler(async (req, res) => {
  const user = req.body;

  try {
    const existingUser = await User.findOne({
      email: user.email,
    });

    if (existingUser) res.status(409).json({ message: "User already exists" });
    if (user.password !== user.confirmPassword)
      res.status(400).json({ message: "Passwords doesn't match" });

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = User({
      name: user.name,
      password: hashedPassword,
      email: user.email,
    });

    const addedUser = await newUser.save();

    res.send(addedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const auth = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email,
    });

    if (user && bcrypt.compare(password, user.password)) {
      res.send({
        token: generateToken(user._id),
        name: user.name,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password " });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = { register, auth };
