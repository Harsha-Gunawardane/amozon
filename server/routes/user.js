const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

router.get("/", userController.addNewUsers);

module.exports = router;