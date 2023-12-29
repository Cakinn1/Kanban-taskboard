import React from "react";

interface ColumnStatusProps {
  handleEditStatus: (value: string) => void;
  name: string;
}

export default function ColumnStatus(props: ColumnStatusProps) {
  const { handleEditStatus, name } = props;
  return (
    <h1
      onClick={() => handleEditStatus(name)}
      className="text-gray-400 hover:text-white duration-300 "
    >
      {name}
    </h1>
  );
}
