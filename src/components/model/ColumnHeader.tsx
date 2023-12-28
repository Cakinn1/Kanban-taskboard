import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
interface HeaderProps {
  title: string;
  description: string;
  setIsOtherModalsOpen: (value: boolean) => void;
  setDeleteTaskModel: (value: boolean) => void;
  deleteTaskModel: boolean;
}

export default function ColumnHeader(props: HeaderProps) {
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const {
    description,
    title,
    setIsOtherModalsOpen,
    deleteTaskModel,
    setDeleteTaskModel,
  } = props;

  return (
    <div className="flex justify-between  relative">
      <div className="space-y-4">
        <h1 className="text-white font-semibold text-lg">{title}</h1>
        <div className="text-[#828fa3] text-[13px] leading-6">
          {description ? description : "No description"}
        </div>
      </div>
      <div className="hover:bg-[#20212C] rounded-full duration-300 h-fit py-1">
        <BsThreeDotsVertical
          onClick={() => setIsModelOpen(!isModelOpen)}
          className="text-2xl cursor-pointer text-[#828fa3]"
        />
      </div>
      {isModelOpen && (
        <div className="absolute space-y-2 cursor-auto bg-[#20212C] tracking-wide -bottom-[70px] w-[190px] h-[94px] rounded-lg shadow-lg p-4 px-6 -right-[100px]">
          <div className="flex text-[#828fa3] justify-between items-center">
            <h1 className="hover:opacity-60 cursor-pointer duration-300">
              Edit task
            </h1>
            <FaXmark onClick={() => setIsModelOpen(false)} className="duration-300  hover:opacity-60 cursor-pointer" />
          </div>
          <p
            className="text-red-500 w-fit hover:opacity-60 cursor-pointer duration-300"
            onClick={() => {
              setIsModelOpen(false);
              setIsOtherModalsOpen(true);
              setDeleteTaskModel(!deleteTaskModel);
            }}
          >
            Delete Task
          </p>
        </div>
      )}
    </div>
  );
}
