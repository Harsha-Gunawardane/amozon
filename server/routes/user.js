const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

router.get("/seed", userController.addDefaultUsers);

module.exports = router;
