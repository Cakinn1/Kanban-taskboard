interface TaskModalProps {
  setBoardNameValue: (value: string) => void;
  boardNameValue: string;
  setColumnNameValue: (value: string) => void;
  ColumnNameValue: string;
  handleCreateNewBoardAndCloseModal: () => void;
  addColumnsToNewBoard: () => void;
}

export default function TaskModal(props: TaskModalProps) {
  const {
    setBoardNameValue,
    ColumnNameValue,
    addColumnsToNewBoard,
    boardNameValue,
    handleCreateNewBoardAndCloseModal,
    setColumnNameValue,
  } = props;
  return (
    <div className="w-full top-0 text-[#ffffff] left-0 h-full absolute  bg-black z-50 bg-opacity-40">
      <div className="absolute space-y-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg h-[330px] bg-[#2B2C37] w-[480px]">
        <div>
          <h1 className="text-lg">Add New Board</h1>
        </div>
        <div className="space-y-1">
          <h1 className="text-[12px]">Name</h1>
          <input
            value={boardNameValue}
            onChange={(e) => setBoardNameValue(e.target.value)}
            className="w-full text-sm px-4 bg-transparent border-2 rounded-md py-[6px] border-[#828fa366] focus:outline-none"
            type="text"
          />
        </div>
        <div className="space-y-1">
          <h1 className="text-[12px]">Columns</h1>
          <input
          onChange={(e) => setColumnNameValue(e.target.value)}
          value={ColumnNameValue}
            className="w-full text-sm px-4 bg-transparent border-2 rounded-md py-[6px] border-[#828fa366] focus:outline-none"
            type="text"
          />
        </div>
        <div className="space-y-3">
          <button  className="text-sm w-full py-2 text-[#635fc7] duration-300 hover:bg-opacity-60 flex justify-center items-center bg-white rounded-full">
            + Add New Column
          </button>
          <button onClick={() => handleCreateNewBoardAndCloseModal()} className="w-full py-2 text-sm hover:brightness-150 duration-300 rounded-full bg-[#635FC7]">
            Create New Board
          </button>
        </div>
      </div>
    </div>
  );
}
