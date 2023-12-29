import React from "react";

interface RenderProps {
  name: string;
  id: number;
  setChangeBoard: (value: number) => void;
}

export default function CreateBoardRenderButton({
  name,
  id,
  setChangeBoard,
}: RenderProps) {
  return (
    <h1
      onClick={() => setChangeBoard(id)}
      className="pl-10 text-[#828fa3] cursor-pointer flex gap-x-3 items-center duration-300 py-2 mr-10 rounded-r-full  hover:bg-[#635fc7]"
    >
      <img src="/assets/icon-board.svg" alt="" />
      {name}
    </h1>
  );
}
