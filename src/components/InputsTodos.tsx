import { FaPlus } from "react-icons/fa";
import { useTodo } from "../store/useTodo";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineCheck } from "react-icons/ai";

const InputsTodos = () => {
  const {
    setTodo,
    isEditing,
    setIsEditing,
    editTitle,
    editData,
    title,
    setTitle,
    data,
    setData,
  } = useTodo();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isEditing) {
          editTitle(isEditing, title);
          editData(isEditing, data);
          setIsEditing(null);
        } else if (!title) {
          alert("input have to be filled out");
          return;
        } else {
          setTodo({ id: uuidv4(), title: title, data: data });
        }

        setTitle("");
        setData("");
      }}
      className="flex justify-between gap-80"
    >
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Add a todo . . ."
        className="focus:-translate-y-1 transition-all focus:border-4 focus:border-double px-2 outline-none  text-gray-600 w-full  bg-white border border-border-200 rounded-lg"
      />
      <input
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        type="date"
        placeholder="Add a todo . . ."
        className="focus:-translate-y-1 transition-all focus:border-4 focus:border-double outline-none px-2 input-bordered input-secondary text-gray-600 w-full  bg-white border border-border-200 rounded-lg"
      />
      <button
        type="submit"
        className="bg-border-200  p-3 rounded-lg text-xl text-white flex justify-center items-center "
      >
        {isEditing ? <AiOutlineCheck /> : <FaPlus />}
      </button>
    </form>
  );
};

export default InputsTodos;
