const express = require("express");
const router = express.Router();
const {
  saveRestroom,
  getRestrooms,
  renderMap,
  getUserRestrooms,
} = require("../controllers/restroom"); // Ensure this path is correct and the functions are exported properly
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, getUserRestrooms);

module.exports = router;
