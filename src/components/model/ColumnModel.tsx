import { BsThreeDotsVertical } from "react-icons/bs";
import { KabanDataColumnProps, KanbanTaskProps } from "../../App";
import ColumnHeader from "./ColumnHeader";

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

  return (
    <section
      onClick={() => setIsModalOpen(false)}
      className="absolute z-50 cursor-pointer bg-black bg-opacity-35 w-full h-full top-0 left-0"
    >
      <div
        onClick={(e) => handleContentClick(e)}
        className="absolute left-1/2  space-y-4  p-8 w-[480px] rounded-2xl h-[370px] -translate-x-1/2 -translate-y-1/2 top-1/2 bg-[#2B2C37]"
      >
        <ColumnHeader description={description} title={title} key={title} />
        <div className="space-y-2">
          <h1 className="text-white text-[13px]">
            Subtasks ({subTaskComepletedTrue} of {subTaskLength})
          </h1>
          <div>
            {subtasks.map((subtask) => {
              return (
                <div>
                  <h1 onClick={() => handleSubtaskBooleanValue(subtask.title)}>
                    {subtask.title}
                  </h1>
                  {subtask.isCompleted ? "is true" : "is false"}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
