const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();
const { Task } = require("../models/taskCollection");

// Api to fetch all task
route.get("/all", async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(`Something went wrong ${error}`);
  }
});

//Api to post task
route.post("/create_task", async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
    });
    const createtask = await task.save();
    res.status(201).send(createtask);
  } catch (error) {
    res.status(400).send(`New Error message ${error}`);
  }
});

// Api to edit task
route.put("/updateTask/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(400).send("This task does not exist");
    }
    const result = await Task.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          status: req.body.status,
        },
      }
    );
    if (result) res.status(200).send("Task has been succesfully updated");
    else res.status(500).send("error please try again later");
  } catch (error) {
    res.status(401).send(`Error please try again later:  ${error}`);
  }
});

// Api to delete task

route.delete("/deleteTask/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) res.status(400).send("Task not found");
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    res.status(204).send("This task is Successfully deleted");
  } catch (error) {
    res.status(400).send(`Error occured ${error}`);
  }
});

module.exports = route;
