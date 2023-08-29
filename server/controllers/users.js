const expressAsyncHandler = require("express-async-handler");

const User = require("../models/User");
const { users } = require("../models/data");

const addNewUsers = expressAsyncHandler(async (req, res) => {
  try {
    await User.deleteMany({})
    const createdUsers = await User.insertMany(users);
    res.send({ createdUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = { addNewUsers };
