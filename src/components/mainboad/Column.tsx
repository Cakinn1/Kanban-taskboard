import React from "react";
import { KabanDataColumnProps } from "../../App";
import Title from "./Title";
import ColumnTask from "./ColumnTask";

interface ColumnProps extends KabanDataColumnProps {
  setKanbanData: (value: KabanDataColumnProps[]) => void;
  kanbanData: KabanDataColumnProps[];

}

export default function Column(props: ColumnProps) {
  const { id, name, tasks, setKanbanData, kanbanData } = props;
  return (
    <div className="space-y-4">
      <Title name={name} tasks={tasks} id={id} />
      <div className="space-y-4">
        {tasks.map((task) => {
          return (
            <ColumnTask
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
