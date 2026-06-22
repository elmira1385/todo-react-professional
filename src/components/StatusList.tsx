import { AiFillCarryOut } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import Card from "./Card";
import { useTodo } from "../store/useTodo";
const StatusList = () => {
  const { todo } = useTodo();
  const completedLength = todo.filter(
    (item) => item.status === "completed"
  ).length;
  const pendingLength = todo.filter((item) => item.status === "pending").length;
  const progress =todo.length===0 ?0:Math.round((completedLength/todo.length) * 100);
  return (
    <section className="flex flex-col gap-2  ">
      <div className="flex justify-center items-center shadow-xl rounded-2xl">
        <Card
          title="total tasks"
          count={todo.length}
          color="text-tx-200"
          border="border-r"
          borderColor="border-gray-300"
        >
          <AiFillCarryOut className="w-6 h-6 text-tx-200" />
        </Card>
        <Card
          title="Completed"
          count={completedLength}
          color="text-tx-300"
          border="border-r"
          borderColor="border-gray-300"
        >
          <AiFillCheckCircle className="w-6 h-6 text-tx-300" />
        </Card>
        <Card
          title="Pending"
          count={pendingLength}
          color="text-tx-400"
          border="border-r"
          borderColor="border-gray-300"
        >
          <AiOutlineClockCircle className="w-6 h-6 text-tx-400" />
        </Card>
        <Card title="Progress" count={progress} darsad="%" color="text-tx-500">
          <AiFillClockCircle className="w-6 h-6 text-tx-500" />
        </Card>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded-[10px] mt-5">
        <div
          style={{ width: `${progress}%` }}
          className="h-3 rounded-[10px] bg-tx-200 transition-all"
        ></div>
      </div>
    </section>
  );
};

export default StatusList;
