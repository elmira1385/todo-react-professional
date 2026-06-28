import { AiOutlineCheck } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTodo } from "../store/useTodo";
import { TiDeleteOutline } from "react-icons/ti";
import { useSearch } from "../store/useSearch";
import { useFilter } from "../store/useFilter";
import { useSort } from "../store/useSort";

const TableTodo = () => {
  const { todo, setIsEditing, setTitle, setData, clearOne, toggleStatus } =
    useTodo();

  const { search } = useSearch();
  const { filter } = useFilter();
  const { sort } = useSort();

  const allFeatureAndTodo = [...todo]
    .filter((item) =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    )
    .filter((item) => {
      if (filter === "pending") return item.status === "pending";
      else if (filter === "completed") return item.status === "completed";
      else return true;
    })
    .sort((a, b) =>
      sort === "asc"
        ? a.title.localeCompare(b.title, "fa")
        : b.title.localeCompare(a.title, "fa"),
    );

  const HighlightTitle = (text: string, search: string) => {
    if (!search) return text;
    const split = text.split(new RegExp(`(${search})`, "gi"));
    return split.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="bg-amber-300">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex *:uppercase *:text-sm">
        <p className="flex-2">Task</p>
        <p className="flex-1">Due Date</p>
        <p className="flex-1">Status</p>
        <p className="flex-1">Actions</p>
      </div>
      <ul className="flex flex-col gap-4 ">
        {allFeatureAndTodo.length === 0 ? (
          <p className="text-center">No tasks found</p>
        ) : (
          allFeatureAndTodo.map((item) => (
            <li
              key={item.id}
              className={`flex ${item.status === "completed" && "opacity-50"}`}
            >
              <p
                className={`flex-2 ${item.status === "completed" && "line-through"}`}
              >
                {HighlightTitle(item.title, search)}
              </p>
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
