import React from "react";
import { KabanDataColumnProps } from "../../App";
import Title from "./Title";
import ColumnTask from "./ColumnTask";

export default function Column(props: KabanDataColumnProps) {
  const { id, name, tasks } = props;
  return (
    <div className="space-y-4">
      <Title name={name} tasks={tasks} id={id} />
      <div className="space-y-4">
        {tasks.map((task) => {
          return <ColumnTask {...task} />;
        })}
      </div>
    </div>
  );
}
