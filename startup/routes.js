const bodyParser = require("body-parser");
const express = require("express");
const task = require("../routes/task");
const cors = require("cors");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api/task", task);
};
