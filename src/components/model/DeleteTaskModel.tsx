import React from "react";

interface DeleteTaskModelProps {
  handleDeleteTask: () => void;
  setDeleteTaskModel: (value: boolean) => void
  deleteTaskModel: boolean
  title: string
}

export default function DeleteTaskModel(props: DeleteTaskModelProps) {
  const { handleDeleteTask, deleteTaskModel, setDeleteTaskModel, title } = props;
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-[480px] space-y-4 h-[230px] rounded-lg p-6 bg-[#2B2C37]">
        <h1 className="text-red-500  text-lg font-semibold">
          Delete This Task?
        </h1>
        <p className="text-[#828fa3] text-[13px] leading-6">
          Are you sure you want to delete the '{title}'
          board? This action will remove all columns and tasks and cannot be
          reversed.
        </p>
        <div className="gap-x-6 flex itme-center">
          <button onClick={() => {
            handleDeleteTask()
            setDeleteTaskModel(!deleteTaskModel)
            }} className="w-[46%]  py-2 duration-300 hover:opacity-65   text-white bg-red-500 rounded-full">Delete</button>
          <button className="w-[46%]  py-2 duration-300 hover:opacity-65  text-[#635fc7] bg-white rounded-full">Cancel</button>
        </div>
      </div>
    </div>
  );
}
