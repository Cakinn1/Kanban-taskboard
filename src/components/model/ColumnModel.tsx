import { BsThreeDotsVertical } from "react-icons/bs";
import { KabanDataColumnProps, KanbanTaskProps } from "../../App";
import ColumnHeader from "./ColumnHeader";
import { useEffect, useState } from "react";
import DeleteTaskModel from "./DeleteTaskModel";
import ColumnInfo from "./ColumnInfo";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import EditTaskModal from "./EditTaskModal";
interface ColumnModelProps extends KanbanTaskProps {
  setIsModalOpen: (value: boolean) => void;
  subTaskLength: number;
  subTaskComepletedTrue: number;
  setKanbanData: (value: KabanDataColumnProps[]) => void;
  kanbanData: KabanDataColumnProps[];
}

export default function ColumnModel(props: ColumnModelProps) {
  const {
    subtasks,
    description,
    id,
    status,
    statusId,
    title,
    setIsModalOpen,
    subTaskComepletedTrue,
    subTaskLength,
    setKanbanData,
    kanbanData,
  } = props;
  const [isOtherModalsOpen, setIsOtherModalsOpen] = useState<boolean>(false);
  const [deleteTaskModel, setDeleteTaskModel] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [editTaskModal, setEditTaskModal] = useState<boolean>(false);
  const [isCurrentStatusOpen, setIsCurrentStatusOpen] =
    useState<boolean>(false);

  function handleContentClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  function handleSubtaskBooleanValue(title: string) {
    const newValue = subtasks.map((item) => {
      return item.title === title
        ? { ...item, isCompleted: !item.isCompleted }
        : item;
    });

    // return this whole array as a new object modifiying the subtask
    const updateTask = kanbanData.map((item) => {
      return {
        ...item,
        tasks: item.tasks.map((task) => {
          return task.id === id ? { ...task, subtasks: newValue } : task;
        }),
      };
    });
    setKanbanData(updateTask);
  }

  function handleDeleteTask() {
    const updateTask = kanbanData.map((item) => {
      return {
        ...item,
        tasks: item.tasks.filter((task) => {
          return task.id !== id;
        }),
      };
    });
    setKanbanData(updateTask);
  }

  // my head hurts
  function handleEditStatus(currentStatus: string) {
    const findCurrentItem = kanbanData
      .map((item) => {
        return item.tasks.find((task) => {
          return task.id === id;
        });
      })
      .filter((item) => item !== undefined);
    const findCurrentItemAsObj = findCurrentItem[0];

    if (findCurrentItemAsObj) {
      const arrayContainingItem = kanbanData.find((item) => {
        return item.tasks.includes(findCurrentItemAsObj);
      });

      arrayContainingItem!.tasks = arrayContainingItem!.tasks.filter((item) => {
        return item.id !== findCurrentItemAsObj.id;
      });

      const targetColumn = kanbanData.find((item) => {
        return item.name === currentStatus;
      });
      if (targetColumn) {
        targetColumn.tasks.push(findCurrentItemAsObj);
      }
      const updateStatus = { ...findCurrentItemAsObj, status: currentStatus };
      const updateKanbanData = kanbanData.map((item) => {
        return {
          ...item,
          task: item.tasks.map((task) =>
            task.id === findCurrentItemAsObj.id ? updateStatus : task
          ),
        };
      });
      setKanbanData(updateKanbanData);
    }
  }

  function handleDeleteSubTask(title: string) {
    const updateKanbanData = kanbanData.map((item) => {
      return {
        ...item,
        tasks: item.tasks.map((task) => {
          return {
            ...task,
            subtasks: task.subtasks.filter((subtask) => {
              return subtask.title !== title;
            }),
          };
        }),
      };
    });
    console.log(updateKanbanData);
    setKanbanData(updateKanbanData);
  }

  return (
    <section
      onClick={() => setIsModalOpen(false)}
      className="absolute z-50 cursor-pointer  bg-black bg-opacity-40 w-full h-full top-0 left-0"
    >
      <div
        onClick={(e) => handleContentClick(e)}
        className={`${
          isOtherModalsOpen ? "hidden" : ""
        } absolute left-1/2  space-y-4  p-8 w-[480px] rounded-2xl min-h-[370px] -translate-x-1/2 -translate-y-1/2 top-1/2 bg-[#2B2C37]`}
      >
        <ColumnHeader
          editTaskModal={editTaskModal}
          setEditTaskModal={setEditTaskModal}
          setDeleteTaskModel={setDeleteTaskModel}
          deleteTaskModel={deleteTaskModel}
          setIsOtherModalsOpen={setIsOtherModalsOpen}
          description={description}
          title={title}
          key={title}
        />
        <div className="space-y-2">
          <h1 className="text-white text-[13px]">
            Subtasks ({subTaskComepletedTrue} of {subTaskLength})
          </h1>
          <div className="space-y-4">
            {subtasks.map((subtask, index) => {
              return (
                <ColumnInfo
                  handleSubtaskBooleanValue={handleSubtaskBooleanValue}
                  title={subtask.title}
                  isCompleted={subtask.isCompleted}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="space-y-2 text-sm relative text-white">
          <h1>Current Status</h1>
          <div
            onClick={() => setIsCurrentStatusOpen(!isCurrentStatusOpen)}
            className="rounded-md border-gray-500 border-2 px-6 flex justify-between items-center py-2"
          >
            <h1>{status}</h1>
            {isCurrentStatusOpen ? (
              <FaChevronUp className="text-[10px] text-[#635FC7]" />
            ) : (
              <FaChevronDown className="text-[10px] text-[#635FC7]" />
            )}
          </div>
          <div
            className={` ${
              isCurrentStatusOpen
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            } duration-300 absolute space-y-2 bg-[#20212C] rounded-md p-4  w-full min-h-[100px]`}
          >
            {kanbanData.map((names) => {
              return (
                <h1
                  key={names.name}
                  onClick={() => handleEditStatus(names.name)}
                  className="text-gray-400 hover:text-white duration-300 "
                >
                  {names.name}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
      {deleteTaskModel && (
        <DeleteTaskModel
          title={title}
          setDeleteTaskModel={setDeleteTaskModel}
          deleteTaskModel={deleteTaskModel}
          handleDeleteTask={handleDeleteTask}
        />
      )}
      {editTaskModal && (
        <EditTaskModal
        handleDeleteSubTask={handleDeleteSubTask}
          editTaskModal={editTaskModal}
          title={title}
          description={description}
          subtasks={subtasks}
          status={status}
          handleEditStatus={handleEditStatus}
          setEditTaskModal={setEditTaskModal}
        />
      )}
    </section>
  );
}
