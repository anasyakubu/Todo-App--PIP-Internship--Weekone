const {
  getTask,
  getTaskByID,
  addTask,
  updateTask,
  deleteTask,
} = require("../models/task.model");

const get = async (req, res) => {
  try {
    const tasks = await getTask();
    res.status(200).json({ status: 200, data: tasks });
  } catch (error) {
    console.error("Get tasks Error:", error); // Debugging: Log error
    res
      .status(500)
      .json({ error: "Failed to retrieve messages", details: error.message });
  }
};

const getByID = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await getTaskByID(id);
    res.status(200).json({ status: 200, data: task });
  } catch (error) {
    console.error("Get task Error:", error);
    res
      .status(500)
      .json({ error: "Failed to retrieve task", details: error.message });
  }
};

const add = async (req, res) => {
  try {
    const taskContent = req.body;
    const result = await addTask(taskContent);
    res.status(201).json({
      status: 201,
      message: "Task added successfully",
      data: taskContent,
    });
  } catch (error) {
    console.error("Add task Error:", error); // Debugging: Log error
    res
      .status(500)
      .json({ error: "Failed to add task", details: error.message });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const taskContent = req.body;
    const result = await updateTask(id, taskContent);
    res.status(200).json({
      status: 200,
      message: "Task updated successfully",
      data: taskContent,
    });
  } catch (error) {
    console.error("Update tasks Error:", error); // Debugging: Log error
    res
      .status(500)
      .json({ error: "Failed to update task", details: error.message });
  }
};

const deleteTasks = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteTask(id);
    res.status(200).json({
      status: 200,
      message: "Tasks deleted successfully",
      data: result,
    });
  } catch (error) {
    console.error("Delete tasks Error:", error); // Debugging: Log error
    res
      .status(500)
      .json({ error: "Failed to delete Tasks", details: error.message });
  }
};

module.exports = {
  get,
  getByID,
  add,
  update,
  deleteTasks,
};
