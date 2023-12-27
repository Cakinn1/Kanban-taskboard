import React from "react";
import Image from "../components/nav/Image";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Nav() {
  return (
    <nav className="bg-[#2B2C37]  flex items-center justify-between">
      <Image />
      <div className="px-10 text-white border-b-[#3E3F4E] justify-between flex items-center border-b flex-1 h-24">
        <h1 className="font-semibold tracking-wide text-2xl">
          Platform Launch
        </h1>
        <div className="flex items-center gap-x-4">
          <button className="bg-[#635FC7] py-3 px-6 hover:brightness-150 duration-150 rounded-full ">
            + Add New Task
          </button>
          <BsThreeDotsVertical className="text-[#828fa3] text-2xl" />
        </div>
      </div>
    </nav>
  );
}
