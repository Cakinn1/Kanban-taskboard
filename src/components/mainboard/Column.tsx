import React from "react";
import { KabanDataColumnProps } from "../../App";
import Title from "./Title";
import ColumnTask from "./ColumnTask";

interface ColumnProps extends KabanDataColumnProps {
  setKanbanData: (value: KabanDataColumnProps[]) => void;
  kanbanData: KabanDataColumnProps[];
  setEditTaskModal: (value: boolean) => void;
  editTaskModal: boolean;

}

export default function Column(props: ColumnProps) {
  const {
    id,
    name,
    tasks,
    setKanbanData,
    kanbanData,
    editTaskModal,
    setEditTaskModal,

  } = props;

  return (
    <div className="space-y-4">
      <Title name={name} tasks={tasks} id={id} />
      <div className={`space-y-4 min-w-[320px]  ${tasks.length < 1 ? "border-2 border-[#828fa366] border-dashed h-[80vh] rounded-md" : ""} `}>
        {tasks.map((task) => {
          return (
            <ColumnTask
              editTaskModal={editTaskModal}
              setEditTaskModal={setEditTaskModal}
              kanbanData={kanbanData}
              description={task.description}
              id={task.id}
              status={task.status}
              statusId={task.statusId}
              subtasks={task.subtasks}
              title={task.title}
              key={task.id}
              setKanbanData={setKanbanData}
            />
          );
        })}
      </div>
    </div>
  );
}
