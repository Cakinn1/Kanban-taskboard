import { BsThreeDotsVertical } from "react-icons/bs";
import { SubTaskProps } from "../../App";
export default function ColumnModel(props: SubTaskProps) {
  const { subtasks } = props;
  return (
    <section className="absolute z-50 bg-black bg-opacity-35 w-full h-full top-0 left-0">
      <div className="absolute left-1/2  p-8 w-[480px] rounded-2xl h-[370px] -translate-x-1/2 -translate-y-1/2 top-1/2 bg-[#2B2C37]">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-semibold text-lg">
            Build UI for onboarding flow
          </h1>
          <BsThreeDotsVertical className="text-2xl cursor-pointer text-[#828fa3]" />
        </div>
      </div>
    </section>
  );
}
