//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const projects = require("./projects.json");
const about = require("./about.json");

const app = express();

//MIDDLEWARE
app.use(cors());

//ROUTES
//HOME ROUTE
app.get("/", (req, res) => {
  res.send("<h2>This is the homepage</h2>");
});

//PROJECTS ROUTE
app.get("/projects", (req, res) => {
  res.json(projects);
});

//ABOUT ROUTE
app.get("/about", (req, res) => {
  res.json(about);
});

//DECLARE PORT
const PORT = process.env.PORT || 5000;

//SERVER LISTENER
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
