// userModel.js
const config = require("../config");

const db = config.db;

const addTask = async (taskContent) => {
  try {
    const { title, description, dueDate, status } = taskContent;
    const [result] = await db.execute(
      "INSERT INTO `tasks` (`title`, `description`, `dueDate`, `date_added` , `status`) VALUES (?, ?, ?, ?, ?, NOW())",
      [title, description, dueDate, status]
    );
    return result;
  } catch (error) {
    console.error("Database Insert Error:", error);
    throw new Error("Failed to add Task to the database");
  }
};

const getTask = async () => {
  try {
    const [rows] = await db.execute("SELECT * FROM `tasks`");
    return rows;
  } catch (error) {
    console.error("Database Query Error:", error);
    throw new Error("Failed to retrieve Task from the database");
  }
};

const getTaskByID = async (id) => {
  try {
    const [rows] = await db.execute("SELECT * FROM `tasks` WHERE id = ?", [id]);
    if (rows.length === 0) {
      throw new Error(`Task with ID ${id} not found`);
    }
    return rows[0];
  } catch (error) {
    console.error("Database Query Error:", error);
    throw new Error("Failed to retrieve task from the database");
  }
};

const updateTask = async (id, taskContent) => {
  try {
    const { title, description, dueDate, status } = taskContent;
    const [result] = await db.execute(
      "UPDATE `tasks` SET `title` = ?, `description` = ?, `dueDate` = ?, `status` = ?  WHERE `id` = ?",
      [title, description, dueDate, status, id]
    );
    return result;
  } catch (error) {
    console.error("Database Update Error:", error);
    throw new Error("Failed to update task in the database");
  }
};

const deleteTask = async (id) => {
  try {
    const [result] = await db.execute("DELETE FROM `tasks` WHERE `id` = ?", [
      id,
    ]);
    return result;
  } catch (error) {
    console.error("Database Delete Error:", error);
    throw new Error("Failed to delete tasks from the database");
  }
};

module.exports = { getTask, getTaskByID, addTask, updateTask, deleteTask };
