const express = require("express");
const {
  get,
  getByID,
  add,
  update,
  deleteTasks,
} = require("../controllers/task.controller");

const router = express.Router();

router.get("/list", get);
router.get("/get/:id", getByID);
router.post("/add", add);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteTasks);

module.exports = router;
