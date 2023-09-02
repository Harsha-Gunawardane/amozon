const express = require("express");
const router = express.Router();
const path = require("path");

const authController = require("../controllers/auth");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.post("/auth", authController.auth);
router.post("/register", authController.register)

module.exports = router;
