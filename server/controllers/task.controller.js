const {
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../models/task.model");

const getTask = async (req, res) => {
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

const addTask = async (req, res) => {
  try {
    const taskContent = req.body;
    const result = await addTask(taskContent);
    res.status(201).json({
      status: 201,
      message: "Task added successfully",
      data: result,
    });
  } catch (error) {
    console.error("Add message Error:", error); // Debugging: Log error
    res
      .status(500)
      .json({ error: "Failed to add message", details: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const messageContent = req.body;
    const result = await updateMessage(id, messageContent);
    res.status(200).json({
      status: 200,
      message: "Message updated successfully",
      data: messageContent,
    });
  } catch (error) {
    console.error("Update message Error:", error); // Debugging: Log error
    res
      .status(500)
      .json({ error: "Failed to update message", details: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteMessage(id);
    res.status(200).json({
      status: 200,
      message: "Message deleted successfully",
      data: result,
    });
  } catch (error) {
    console.error("Delete message Error:", error); // Debugging: Log error
    res
      .status(500)
      .json({ error: "Failed to delete message", details: error.message });
  }
};

module.exports = {
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
