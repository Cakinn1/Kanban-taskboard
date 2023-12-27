import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface HeaderProps {
  title: string;
  description: string;
}

export default function ColumnHeader(props: HeaderProps) {
  const { description, title } = props;
  return (
    <div className="flex justify-between ">
      <div className="space-y-4">
        <h1 className="text-white font-semibold text-lg">{title}</h1>
        <div className="text-[#828fa3] text-[13px] leading-6">
          {description ? description : "No description"}
        </div>
      </div>
      <BsThreeDotsVertical className="text-2xl cursor-pointer text-[#828fa3]" />
    </div>
  );
}
