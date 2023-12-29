import React, { useEffect, useState } from "react";

interface SubTaskProps {
  title: string;
  isCompleted: boolean;
  handleSubtaskBooleanValue: (value: string) => void;
}

export default function ColumnInfo(props: SubTaskProps) {
  const { isCompleted, title, handleSubtaskBooleanValue } = props;
  const [isChecked, setIsChecked] = useState<boolean>(isCompleted);

  function handleCheckBox() {
    setIsChecked(!isChecked);
    handleSubtaskBooleanValue(title);
  }


  return (
    <div
      onClick={() => handleCheckBox()}
      className="bg-[#20212C] text-[12px] flex items-center gap-x-4 p-2"
    >
      <input
        checked={isChecked}
        key={title}
        onChange={() => handleCheckBox()}
        className="cursor-pointer"
        type="checkbox"
      />
      <h1
        className={` ${
          isCompleted ? "text-gray-500 line-through" : "text-white line"
        }`}
      >
        {title}
      </h1>
      {/* <h1 onClick={() => handleSubtaskBooleanValue(title)}>{title}</h1> */}
      {/* {isCompleted ? "is true" : "is false"} */}
    </div>
  );
}
