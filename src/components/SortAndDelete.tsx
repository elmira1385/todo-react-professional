import { GoSortAsc } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const SortAndDelete = () => {
  return (
    <div className="flex justify-between ">
      <button className="flex group hover:bg-bg-100   cursor-pointer  rounded-lg transition-all justify-center items-center gap-2 border border-gray-800 p-3">
        <GoSortAsc className="text-gray-600 group-hover:text-white " />
        <p className=" text-[14px] uppercase group-hover:text-white">Sort</p>
      </button>
      <button className="flex justify-center items-center uppercase cursor-pointer transition-all hover:-translate-y-0.5 bg-bg-200 text-[14px] font-bold px-6 py-3 rounded-md gap-2">
        <RiDeleteBin6Line/>
        Delete All
      </button>
    </div>
  );
};

export default SortAndDelete;
