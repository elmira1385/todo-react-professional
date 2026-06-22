import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const TableTodo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex *:uppercase *:text-sm">
        <p className="flex-2">Task</p>
        <p className="flex-1">Due Date</p>
        <p className="flex-1">Status</p>
        <p className="flex-1">Actions</p>
      </div>
      <ul className="flex flex-col gap-4">
        <li className="flex">
          <p className="flex-2">one</p>
          <p className="flex-1">2025-05-08</p>
          <div className="flex-1">
            <span className="bg-tx-400 px-2 py-1 text-[12px] rounded-full ">
              pending
            </span>
          </div>
          <div className="flex flex-1 gap-1">
            <button className="bg-tx-400 px-2 py-1 rounded-lg transition-all hover:-translate-y-0.5 cursor-pointer">
              <CiEdit />
            </button>
            <button className="bg-tx-300 px-2 py-1 rounded-lg transition-all hover:-translate-y-0.5 cursor-pointer">
              <AiOutlineCheck />
            </button>
            <button className="bg-bg-200 px-2 py-1 rounded-lg transition-all hover:-translate-y-0.5 cursor-pointer">
              <RiDeleteBin6Line />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TableTodo;
