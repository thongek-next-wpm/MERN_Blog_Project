require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 3000 || process.env.PORT;

//static files
app.use(express.static("public"));

//template engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//routes
app.use("/", require("./server/routers/main"));

//server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
