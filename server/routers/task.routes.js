const express = require("express");
const {
  get,
  add,
  update,
  deleteTasks,
} = require("../controllers/task.controller");

const router = express.Router();

router.get("/list", get);
router.post("/add", add);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteTasks);

module.exports = router;
