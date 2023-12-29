import CreateBoardRenderButton from "../components/rightboard/CreateBoardRenderButton";
import CreateBoards from "../components/rightboard/CreateBoards";
import BottomBar from "../components/rightboard/BottomBar";
import { BoardProps } from "../App";
import { useEffect, useState } from "react";
import TaskModal from "../components/model/TaskModal";

interface RightBoardProps {
  chooseBoard: BoardProps[];
  setChooseBoard: (value: BoardProps[]) => void;
  setChangeBoard: (value: number) => void;
  setAddTaskModal: (value: boolean) => void;

}

export default function RightBoard(props: RightBoardProps) {
  const { chooseBoard, setChooseBoard, setChangeBoard, setAddTaskModal } =
    props;

    useEffect(() => {
      console.log(chooseBoard);
    }, [chooseBoard]);
    

  return (
    <div
      style={{ height: "calc(100vh - 100px)" }}
      className="w-[300px] flex flex-col fixed  z-50 border-r border-r-[#3E3F4E]"
    >
      <h1 className="px-10 py-4 cursor-default uppercase text-[#828fa3] tracking-[2px] text-sm">
        all boards (2)
      </h1>
      <div className="space-y-2 text-white tracking-wide">
        {chooseBoard.map((boardValue) => {
          return (
            <CreateBoardRenderButton
              setChangeBoard={setChangeBoard}
              key={boardValue.id}
              id={boardValue.id}
              name={boardValue.name}
            />
          );
        })}
        <CreateBoards  setAddTaskModal={setAddTaskModal} />
      </div>
      <BottomBar />
    </div>
  );
}
