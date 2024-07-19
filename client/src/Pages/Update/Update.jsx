import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/task/get/${id}`)
      .then((response) => {
        setTask(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the task!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9000/api/task/update/${id}`, task)
      .then((response) => {
        console.log(response.data);
        // navigate.push("/");
        window.location = "/";
      })
      .catch((error) => {
        console.error("There was an error updating the task!", error);
      });
  };

  return (
    <div className="UpdateTask p-10">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Update Task</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Due Date
            </label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate.split("T")[0]}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <select
              name="status"
              id=""
              value={task.status}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value={task.status}>{task.status}</option>
              <option>Pending</option>
              <option>Success</option>
              <option>Expire</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Task
            </button>
            <button
              type="button"
              onClick={() => navigate.push("/")}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
