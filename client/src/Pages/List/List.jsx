// import React from 'react'
import { Link } from "react-router-dom";
import "./List.css";

const List = () => {
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
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2">Due Date</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  The Sliding Mr.
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Malcolm Lockyer
                </td>
                <td className="border border-gray-300 px-4 py-2">1961</td>
                <td className="border border-gray-300 px-4 py-2">1961</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
