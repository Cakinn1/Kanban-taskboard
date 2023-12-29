import React from "react";
import { FaXmark } from "react-icons/fa6";

interface EditTaskModalProps {
  setEditTaskModal: (value: boolean) => void;
  editTaskModal: boolean;
  title: string;
  description: string;
  subtasks: {
    title: string;
    isCompleted: boolean;
  }[];
  status: string;
  handleEditStatus: (value: string) => void;
  handleDeleteSubTask: (value: string) => void;
}

export default function EditTaskModal(props: EditTaskModalProps) {
  const {
    editTaskModal,
    setEditTaskModal,
    description,
    handleEditStatus,
    status,
    subtasks,
    title,
    handleDeleteSubTask,
  } = props;

  function RenderSubTask({ value }: { value: string }) {
    return (
      <div className="flex items-center gap-x-4">
        <h1 className="border-2 w-[100%] border-gray-500 rounded-md p-2 text-sm ">
          {value}
        </h1>
        <FaXmark
          onClick={() => handleDeleteSubTask(value)}
          className="text-2xl cursor-pointer text-gray-500 duration-300 hover:brightness-150"
        />
      </div>
    );
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute top-1/2 cursor-auto text-white left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-[480px] h-[680px] space-y-4 bg-[#2B2C37] rounded-lg p-7">
        <h1 className="text-2xl">Edit Task</h1>
        <div className="space-y-1">
          <h1>Title:</h1>
          <h1 className="border-2 border-gray-500 rounded-md p-2 text-sm ">
            {title}
          </h1>
        </div>

        <div className="space-y-1">
          <h1>Description:</h1>
          <h1 className="border-2 border-gray-500 min-h-[100px] rounded-md p-2 text-sm ">
            {description}
          </h1>
        </div>

        <div className="space-y-1">
          <h1>Subtasks:</h1>
          <div className="space-y-2">
            {subtasks.map((task) => (
              <RenderSubTask value={task.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
