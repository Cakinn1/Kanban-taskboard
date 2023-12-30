import { BoardProps, KabanDataColumnProps, KanbanTaskProps } from "../App";
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
  lengthOfBoard: number;
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
    lengthOfBoard,
  } = props;

  console.log(kanbanData)


  function handleOnDrag(e: React.DragEvent, taskData: KanbanTaskProps) {
    console.log(taskData)
    const serializedData = JSON.stringify(taskData)
    e.dataTransfer.setData("kanbanTask", serializedData);
  }

  function handleOnDrop(e: React.DragEvent) {
    const serializedData = e.dataTransfer.getData("kanbanTask") as string;
    const droppedTask = JSON.parse(serializedData)
    // setKanbanData([...kanbanData, droppedTask])
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  return (
    <section className="flex" style={{ height: "calc(100vh - 100px)" }}>
      <RightBoard
        lengthOfBoard={lengthOfBoard}
        setAddTaskModal={setAddTaskModal}
        setChangeBoard={setChangeBoard}
        chooseBoard={chooseBoard}
        setChooseBoard={setChooseBoard}
      />
      <div className="flex-1 ml-[300px] p-8 overflow-x-scroll bg-[#20212C]">
        <div onDrag={handleOnDrop} onDragOver={handleDragOver} className="w-[100vw] flex gap-x-8 cursor-all-scroll">
          {kanbanData.map((data) => {
            return (
              <Column
              handleOnDrag={handleOnDrag}
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
