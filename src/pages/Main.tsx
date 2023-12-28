import { KabanDataColumnProps } from "../App";
import Column from "../components/mainboard/Column";
import RightBoard from "./RightBoard";

interface MainProps {
  kanbanData: KabanDataColumnProps[];
  setKanbanData: (value: KabanDataColumnProps[]) => void;
}

export default function Main(props: MainProps) {
  const { kanbanData, setKanbanData } = props;
  return (
    <section className="flex" style={{ height: "calc(100vh - 100px)" }}>
      <RightBoard />
      <div className="flex-1 ml-[300px] p-8 overflow-x-scroll bg-[#20212C]">
        <div className="w-[100vw] flex gap-x-8">
          {kanbanData.map((data) => {
            return (
              <Column
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
