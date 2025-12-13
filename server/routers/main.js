const express = require("express");
const router = express.Router();

// route for home page
router.get("/", (req, res) => {
  const locals = {
    title: "Node.js Blog",
    description: "Simple blog built with Node.js, Express and EJS",
  };
  res.render("index", { locals });
});

// route for about page
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
