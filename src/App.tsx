import { useEffect, useState } from "react";
import data from "./data/data.json";
import Main from "./pages/Main";
import Nav from "./pages/Nav";
import TaskModal from "./components/model/TaskModal";

export interface KanbanTaskProps {
  description: string;
  id: number;
  status: string;
  statusId: number;
  title: string;
  subtasks: {
    title: string;
    isCompleted: boolean;
  }[];
}

export interface SubTaskProps {
  subtasks: {
    title: string;
    isCompleted: boolean;
  }[];
}

export interface KabanDataColumnProps {
  id: number;
  name: string;
  tasks: KanbanTaskProps[];
}

export interface BoardProps {
  id: number;
  name: string;
  columns: KabanDataColumnProps[];
}

export default function App() {
  const [editTaskModal, setEditTaskModal] = useState<boolean>(false);
  const [addTaskModal, setAddTaskModal] = useState<boolean>(false);
  const [boardNameValue, setBoardNameValue] = useState<string>("anthony");
  const [columnNameValue, setColumnNameValue] = useState<string>("");
  const [idIncreamented, setIdIncreamented] = useState<number>(2);
  const [columnIdIncreamented, setColumnIdIncreamented] = useState<number>(0);
  const [chooseBoard, setChooseBoard] = useState<BoardProps[]>(data.boards);
  const [changeBoard, setChangeBoard] = useState<number>(0);
  const [kanbanData, setKanbanData] = useState<KabanDataColumnProps[]>(
    data.boards[changeBoard].columns
  );

  const nameOfBoard = data.boards[changeBoard].name;
  const lengthOfBoard = data.boards.length

  function handleCreateNewBoardAndCloseModal() {
    setIdIncreamented(idIncreamented + 1);

    const newboard = {
      id: idIncreamented + 1,
      name: boardNameValue,
      columns: [],
    };


    data.boards.push(newboard);
    setAddTaskModal(false);
  }

  function addColumnsToNewBoard() {
    const currentBoard = chooseBoard.find((item) => item.id === idIncreamented);
    if (currentBoard) {
      const newColumn = {
        id: columnIdIncreamented,
        name: columnNameValue,
        tasks: [],
      };
      currentBoard.columns.push(newColumn);
      setColumnIdIncreamented(columnIdIncreamented + 1);
    }
  }
  useEffect(() => {
    if (idIncreamented > 2) {
      addColumnsToNewBoard();
    }
    console.log(data.boards);
  }, [idIncreamented]);

  useEffect(() => {
    setKanbanData(data.boards[changeBoard].columns);
  }, [changeBoard]);

  return (
    <div className="h-screen">
      <Nav nameOfBoard={nameOfBoard} setEditTaskModal={setEditTaskModal} />
      <Main
      lengthOfBoard={lengthOfBoard}
        setAddTaskModal={setAddTaskModal}
        setChangeBoard={setChangeBoard}
        chooseBoard={chooseBoard}
        setChooseBoard={setChooseBoard}
        setEditTaskModal={setEditTaskModal}
        editTaskModal={editTaskModal}
        setKanbanData={setKanbanData}
        kanbanData={kanbanData}
      />
      {addTaskModal && (
        <TaskModal
          boardNameValue={boardNameValue}
          setColumnNameValue={setColumnNameValue}
          ColumnNameValue={columnNameValue}
          handleCreateNewBoardAndCloseModal={handleCreateNewBoardAndCloseModal}
          addColumnsToNewBoard={addColumnsToNewBoard}
          setBoardNameValue={setBoardNameValue}
        />
      )}
    </div>
  );
}
