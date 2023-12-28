import React from "react";
import { KabanDataColumnProps } from "../../App";

export default function Title(props: KabanDataColumnProps) {
  const { id, name, tasks } = props;
  return (
    <div className="flex uppercase tracking-[1px] text-sm text-[#828fa3] items-center gap-x-2">
      <div className="bg-[#49C4E5] h-3 w-3 rounded-full"></div>
      <h1>{name}</h1>
      <p>({tasks.length})</p>
    </div>
  );
}
