import { GoSortAsc } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTodo } from "../store/useTodo";
import { useState } from "react";
import { useSort } from "../store/useSort";

const SortAndDelete = () => {
  const { clearAll } = useTodo();
  const [showModulSort, setShowModulSort] = useState(false);
  const { setSort } = useSort();
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col relative">
        <button onClick={()=>{
          setShowModulSort(!showModulSort)
        }} className="flex group hover:bg-bg-100   cursor-pointer  rounded-lg transition-all justify-center items-center gap-2 border border-gray-800 p-3">
          <GoSortAsc className="text-gray-600 group-hover:text-white " />
          <p className=" text-[14px] uppercase group-hover:text-white">Sort</p>
        </button>
        {showModulSort && (
          <ul className=" z-10 flex  shadow rounded-lg  bg-white absolute top-12 p-2 left-0">
            <li
              onClick={() => {
                setSort("asc");
                setShowModulSort(false)
              }}
              className="text-gray-600 hover:bg-gray-200 cursor-pointer rounded-[7px] transition-all px-2 py-2 active:bg-tx-200 active:text-white"
            >
              <a>asc</a>
            </li>

            <li
              onClick={() => {
                setSort("desc");
                setShowModulSort(false)

              }}
              className="text-gray-600 hover:bg-gray-200 cursor-pointer rounded-[7px] transition-all px-2 py-2 active:bg-tx-200 active:text-white"
            >
              <a>desc</a>
            </li>
          </ul>
        )}
      </div>
      <button
        onClick={() => {
          clearAll();
        }}
        className="flex justify-center items-center uppercase cursor-pointer transition-all hover:-translate-y-0.5 bg-bg-200 text-[14px] font-bold px-6 py-3 rounded-md gap-2"
      >
        <RiDeleteBin6Line />
        Delete All
      </button>
    </div>
  );
};

export default SortAndDelete;
