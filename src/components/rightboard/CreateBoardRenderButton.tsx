import React from "react";
import { CreateBoardValueProps } from "../../data/constant";

export default function CreateBoardRenderButton({
  title,
}: CreateBoardValueProps) {
  return (
    <h1 className="pl-10 text-[#828fa3] cursor-pointer flex gap-x-3 items-center duration-300 py-2 mr-10 rounded-r-full  hover:bg-[#635fc7]">
      <img src="/assets/icon-board.svg" alt="" />
      {title}
    </h1>
  );
}
