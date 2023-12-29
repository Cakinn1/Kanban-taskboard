import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import ColumnStatus from "./ColumnStatus";
import { KabanDataColumnProps } from "../../App";
import ColumnStatusInfo from "./ColumnStatusInfo";

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
  handleAddNewSubTask: () => void;
  setSubTaskInputFieldValue: (value: string) => void;
  subTaskInputFieldValue: string;
  editInputTitle: string;
  setEditInputTitle: (value: string) => void;
  handleEditTitle: () => void;
  editDescription: string;
  setEditDescription: (value: string) => void;
  handleEditDescription: () => void;
  kanbanData: KabanDataColumnProps[];
  isCurrentStatusOpen: boolean;
  setIsCurrentStatusOpen: (value: boolean) => void;
  setIsModalOpen: (value: boolean) => void;
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
    handleAddNewSubTask,
    setSubTaskInputFieldValue,
    subTaskInputFieldValue,
    editInputTitle,
    setEditInputTitle,
    handleEditTitle,
    editDescription,
    handleEditDescription,
    setEditDescription,
    kanbanData,
    isCurrentStatusOpen,
    setIsCurrentStatusOpen,
    setIsModalOpen,
  } = props;

  const [showInput, setShowInput] = useState<boolean>(false);

  function RenderSubTask({ value }: { value: string }) {
    return (
      <div className="flex items-center gap-x-4">
        <h1 className="border-2 w-[100%]  border-[#828fa366]  rounded-md p-2 text-sm ">
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
    <form
      onSubmit={(e) => e.preventDefault()}
      onClick={(e) => e.stopPropagation()}
      className="absolute top-1/2 cursor-auto text-[#ffffff] left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-[480px] h-[680px] space-y-4 bg-[#2B2C37] rounded-lg p-7">
        <h1 className="text-[22px]">Edit Task</h1>
        <div className="space-y-1">
          <h1 className="text-[12px]">Title:</h1>
          <input
            onChange={(e) => setEditInputTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEditTitle()}
            className="border-2 bg-transparent focus:outline-none w-full  border-[#828fa366] rounded-md p-2 text-sm "
            type="text"
            value={editInputTitle}
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-[12px]">Description:</h1>
          <textarea
            onChange={(e) => setEditDescription(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEditDescription()}
            className="border-2 resize-none focus:outline-none  bg-transparent min-h-[100px] w-full  border-[#828fa366] rounded-md p-2 text-sm "
            value={editDescription}
          />
        </div>

        {/* change this after? */}
        <div className="space-y-1 overflow-x-auto h-[200px]">
          <h1 className="text-[12px]">Subtasks</h1>
          <div className="space-y-2">
            {subtasks.map((task) => (
              <RenderSubTask value={task.title} />
            ))}
          </div>
          <div className="space-y-4">
            <div
              className={`flex items-center gap-x-4 ${
                showInput ? "flex" : "hidden"
              }`}
            >
              <input
                className="border-2 bg-transparent w-[100%] focus:outline-none mt-1 border-[#828fa366] rounded-md p-2 text-sm"
                onChange={(e) => setSubTaskInputFieldValue(e.target.value)}
                type="text"
                value={subTaskInputFieldValue}
              />
              <FaXmark className="text-2xl cursor-pointer text-gray-500 duration-300 hover:brightness-150" />
            </div>
            <button
              className="w-full py-2 text-[#635fc7] duration-300 hover:bg-opacity-60 flex justify-center items-center bg-white rounded-full"
              onClick={() => {
                handleAddNewSubTask();
                setShowInput(true);
              }}
            >
              + Add New Subtask
            </button>
          </div>
        </div>
        <ColumnStatusInfo
          kanbanData={kanbanData}
          status={status}
          setIsCurrentStatusOpen={setIsCurrentStatusOpen}
          handleEditStatus={handleEditStatus}
          isCurrentStatusOpen={isCurrentStatusOpen}
        />
        <button
          onClick={() => {
            handleEditDescription();
            handleEditTitle();
            setEditTaskModal(false);
            setIsModalOpen(false);
          }}
          className="w-full py-2 text-sm hover:brightness-150 duration-300 rounded-full bg-[#635FC7]"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
