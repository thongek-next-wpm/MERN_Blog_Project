const express = require("express");
const router = express.Router();

// route for home page
router.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

module.exports = router;
