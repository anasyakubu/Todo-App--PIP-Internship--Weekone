const express = require("express");
const {
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

const router = express.Router();

router.get("/list", getTask);
router.post("/add", addTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
