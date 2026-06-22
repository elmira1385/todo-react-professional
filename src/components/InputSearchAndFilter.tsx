import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const InputSearchAndFilter = () => {
  const [showModulFilter, setShowModulFilter] = useState(false);
  return (
    <div className="flex gap-4 justify-between">
      <div
        className="border border-border-300 transition-all
                focus-within:border-4
                focus-within:border-double
                flex items-center gap-2 px-2 w-full  rounded-lg"
      >
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search tasks... (Ctrl+F)"
          className="text-gray-600 outline-none w-full"
        />
      </div>
      <div className="flex flex-col relative">
        <button
          onClick={() => {
            setShowModulFilter(!showModulFilter);
          }}
          className="flex group hover:bg-bg-100   cursor-pointer  rounded-lg transition-all justify-center items-center gap-2 border border-gray-800 p-3"
        >
          <IoFilter className="text-gray-600 group-hover:text-white " />
          <p className=" text-[14px] uppercase group-hover:text-white">
            Filter
          </p>
        </button>
        {showModulFilter && (
          <ul className=" z-10 flex flex-col shadow rounded-lg  bg-white absolute top-12 p-2 left-0">
            <li className="text-gray-600 hover:bg-gray-200 cursor-pointer rounded-[7px] transition-all px-2 py-2 active:bg-tx-200 active:text-white">
              <a>All Tasks</a>
            </li>

            <li className="text-gray-600 hover:bg-gray-200 cursor-pointer rounded-[7px] transition-all px-2 py-2 active:bg-tx-200 active:text-white">
              <a>Pending</a>
            </li>

            <li className="text-gray-600 hover:bg-gray-200 cursor-pointer rounded-[7px] transition-all px-2 py-2 active:bg-tx-200 active:text-white">
              <a>Completed</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default InputSearchAndFilter;
