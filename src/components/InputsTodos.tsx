
import { FaPlus } from "react-icons/fa";

const InputsTodos = () => {
  return (
    <div className="flex justify-between gap-80">
      <input
        type="text"
        placeholder="Add a todo . . ."
        className="focus:-translate-y-1 transition-all focus:border-4 focus:border-double px-2 outline-none  text-gray-600 w-full  bg-white border border-border-200 rounded-lg"
      />
      <input
        type="date"
        placeholder="Add a todo . . ."
        className="focus:-translate-y-1 transition-all focus:border-4 focus:border-double outline-none px-2 input-bordered input-secondary text-gray-600 w-full  bg-white border border-border-200 rounded-lg"
      />
      <button className="bg-border-200  p-3 rounded-lg text-xl text-white flex justify-center items-center ">
        <FaPlus  />
      </button>
    </div>
  );
};

export default InputsTodos;
