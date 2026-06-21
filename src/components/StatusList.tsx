
import { AiFillCarryOut } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import Card from "./Card";
const StatusList = () => {
  return (
    <section className="flex flex-col gap-2  ">
      <div className="flex justify-center items-center shadow-xl rounded-2xl">
        <Card
          title="total tasks"
          count="0"
          color="text-tx-200"
          border="border-r"
          borderColor="border-gray-300"
        >
          <AiFillCarryOut className="w-6 h-6 text-tx-200" />
        </Card>
        <Card
          title="Completed"
          count="0"
          color="text-tx-300"
          border="border-r"
          borderColor="border-gray-300"
        >
          <AiFillCheckCircle className="w-6 h-6 text-tx-300" />
        </Card>
        <Card
          title="Pending"
          count="0"
          color="text-tx-400"
          border="border-r"
          borderColor="border-gray-300"
        >
          <AiOutlineClockCircle className="w-6 h-6 text-tx-400" />
        </Card>
        <Card title="Progress" count="0" color="text-tx-500">
          <AiFillClockCircle className="w-6 h-6 text-tx-500" />
        </Card>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded-[10px] mt-5">
        <div className="hidden w-full h-3 rounded-[10px] bg-tx-200"></div>
      </div>
    </section>
  );
};

export default StatusList;
