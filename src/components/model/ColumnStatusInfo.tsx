import React from "react";
import ColumnStatus from "./ColumnStatus";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { KabanDataColumnProps } from "../../App";

interface ColumnStatusInfoProps {
  setIsCurrentStatusOpen: (value: boolean) => void;
  isCurrentStatusOpen: boolean;
  kanbanData: KabanDataColumnProps[];
  handleEditStatus: (value: string) => void;
  status: string;
}

export default function ColumnStatusInfo(props: ColumnStatusInfoProps) {
  const {
    handleEditStatus,
    isCurrentStatusOpen,
    kanbanData,
    status,
    setIsCurrentStatusOpen,
  } = props;
  return (
    <div className="space-y-2 text-sm relative text-white">
      <h1>Current Status</h1>
      <div
        onClick={() => setIsCurrentStatusOpen(!isCurrentStatusOpen)}
        className="rounded-md border-gray-500 border-2 px-6 flex justify-between items-center py-2"
      >
        <h1>{status}</h1>
        {isCurrentStatusOpen ? (
          <FaChevronUp className="text-[10px] text-[#635FC7]" />
        ) : (
          <FaChevronDown className="text-[10px] text-[#635FC7]" />
        )}
      </div>
      <div
        className={` ${
          isCurrentStatusOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } duration-300 absolute space-y-2 bg-[#20212C] rounded-md p-4  w-full `}
      >
        {kanbanData.map((names) => {
          return (
            <ColumnStatus
              handleEditStatus={handleEditStatus}
              name={names.name}
              key={names.name}
            />
          );
        })}
      </div>
    </div>
  );
}
