import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./List.css";

const List = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/task/list")
      .then((result) => {
        setTodo(result.data.data);

        console.error(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:9000/api/task/delete/${id}`)
      .then((res) => {
        console.log(res);
        setTodo(todo.filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="List p-10">
      <div className="">
        <Link
          className="p-3 w-full bg-green-500 text-black rounded-lg shadow-lg"
          to="Add"
        >
          Add Task
        </Link>
      </div>
      <div className="mt-20">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl py-10">Todo App</h1>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2">Due Date</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((item) => (
                <tr className="bg-white hover:bg-gray-100" key={item.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(item.dueDate).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex gap-3">
                    <Link
                      to={`/update/${item.id}`}
                      className="p-3 bg-green-500 text-black"
                    >
                      Edit
                    </Link>
                    <button
                      className="p-3 bg-green-500 text-black"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
