import { AiOutlineCheck } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTodo } from "../store/useTodo";
import { TiDeleteOutline } from "react-icons/ti";

const TableTodo = () => {
  const { todo, setIsEditing, setTitle, setData, clearOne, toggleStatus } =
    useTodo();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex *:uppercase *:text-sm">
        <p className="flex-2">Task</p>
        <p className="flex-1">Due Date</p>
        <p className="flex-1">Status</p>
        <p className="flex-1">Actions</p>
      </div>
      <ul className="flex flex-col gap-4 ">
        {todo.length === 0 ? (
          <p className="text-center">No tasks found</p>
        ) : (
          todo.map((item) => (
            <li key={item.id} className={`flex ${item.status==="completed"&&"opacity-50"}`}>
              <p className={`flex-2 ${item.status==="completed"&&"line-through"}`}>{item.title}</p>
              <p className="flex-1">{item.data || "No due data"}</p>
              <div className="flex-1">
                <span
                  className={` px-2 py-1 text-[12px] rounded-full ${item.status === "pending" ? "bg-tx-400" : "bg-tx-300"}`}
                >
                  {item.status}
                </span>
              </div>
              <div className="flex flex-1 gap-1">
                <button
                  onClick={() => {
                    setIsEditing(item.id);
                    setTitle(item.title);
                    setData(item.data);
                  }}
                  className="bg-tx-400 px-2 py-1 rounded-lg transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <CiEdit />
                </button>
                <button
                  onClick={() => {
                    toggleStatus(item.id);
                  }}
                  className="bg-tx-300 px-2 py-1 rounded-lg transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  {item.status === "pending" ? (
                    <AiOutlineCheck />
                  ) : (
                    <TiDeleteOutline />
                  )}
                </button>
                <button
                  onClick={() => {
                    clearOne(item.id);
                  }}
                  className="bg-bg-200 px-2 py-1 rounded-lg transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TableTodo;
