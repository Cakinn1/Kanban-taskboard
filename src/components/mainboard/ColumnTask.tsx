import React, { useEffect, useState } from "react";
import { KabanDataColumnProps, KanbanTaskProps } from "../../App";
import ColumnModel from "../model/ColumnModel";

interface ColumnTaskProps extends KanbanTaskProps {
  setKanbanData: (value: KabanDataColumnProps[]) => void;
  kanbanData: KabanDataColumnProps[];
  setEditTaskModal: (value: boolean) => void;
  editTaskModal: boolean;

}

export default function ColumnTask(props: ColumnTaskProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    description,
    id,
    status,
    statusId,
    subtasks,
    title,
    setKanbanData,
    kanbanData,
    editTaskModal,
    setEditTaskModal,

  } = props;

  const subTaskComepletedTrue = subtasks.filter((item) => {
    return item.isCompleted;
  });

  const subTaskLength = subtasks.map((item) => {
    return item.isCompleted;
  });

  function handleModalOpen() {
    setIsModalOpen(!isModalOpen);
  }


 

  return (
    <section className="w-[320px]">
      <div
        onClick={() => handleModalOpen()}
        className="bg-[#2B2C37] space-y-1 cursor-pointer hover:opacity-50 duration-300  rounded-lg px-4 py-6"
      >
        <h1 className="text-white">{title}</h1>
        <p className="text-[#828fa3] text-[11px]">
          {subTaskComepletedTrue.length} of {subTaskLength.length} subtasks
        </p>
      </div>
      {isModalOpen && (
        <ColumnModel
          isModalOpen={isModalOpen}
          setEditTaskModal={setEditTaskModal}
          editTaskModal={editTaskModal}
          kanbanData={kanbanData}
          setKanbanData={setKanbanData}
          subTaskComepletedTrue={subTaskComepletedTrue.length}
          subTaskLength={subTaskLength.length}
          setIsModalOpen={setIsModalOpen}
          description={description}
          id={id}
          status={status}
          statusId={statusId}
          subtasks={subtasks}
          title={title}
          key={id}
        />
      )}
    </section>
  );
}
