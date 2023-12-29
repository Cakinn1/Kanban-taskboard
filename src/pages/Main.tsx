import { BoardProps, KabanDataColumnProps } from "../App";
import Column from "../components/mainboard/Column";
import RightBoard from "./RightBoard";

interface MainProps {
  kanbanData: KabanDataColumnProps[];
  setKanbanData: (value: KabanDataColumnProps[]) => void;
  setEditTaskModal: (value: boolean) => void;
  setAddTaskModal: (value: boolean) => void;
  editTaskModal: boolean;
  chooseBoard: BoardProps[];
  setChooseBoard: (value: BoardProps[]) => void;
  setChangeBoard: (value: number) => void;
}

export default function Main(props: MainProps) {
  const {
    setAddTaskModal, 
    kanbanData,
    setKanbanData,
    editTaskModal,
    setEditTaskModal,
    chooseBoard,
    setChooseBoard,
    setChangeBoard,
  } = props;

  return (
    <section className="flex" style={{ height: "calc(100vh - 100px)" }}>
      <RightBoard
      setAddTaskModal={setAddTaskModal} 
        setChangeBoard={setChangeBoard}
        chooseBoard={chooseBoard}
        setChooseBoard={setChooseBoard}
      />
      <div className="flex-1 ml-[300px] p-8 overflow-x-scroll bg-[#20212C]">
        <div className="w-[100vw] flex gap-x-8 cursor-all-scroll">
          {kanbanData.map((data) => {
            return (
              <Column
                setEditTaskModal={setEditTaskModal}
                editTaskModal={editTaskModal}
                kanbanData={kanbanData}
                setKanbanData={setKanbanData}
                id={data.id}
                name={data.name}
                tasks={data.tasks}
                key={data.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
