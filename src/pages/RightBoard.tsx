import CreateBoardRenderButton from "../components/rightboard/CreateBoardRenderButton";
import { createBoardValue } from "../data/constant";
import CreateBoards from "../components/rightboard/CreateBoards";
import BottomBar from "../components/rightboard/BottomBar";

export default function RightBoard() {
  return (
    <div
      style={{ height: "calc(100vh - 100px)" }}
      className="w-[300px] flex flex-col fixed  z-50 border-r border-r-[#3E3F4E]"
    >
      <h1 className="px-10 py-4 cursor-default uppercase text-[#828fa3] tracking-[2px] text-sm">
        all boards (2)
      </h1>
      <div className="space-y-2 text-white tracking-wide">
        {createBoardValue.map((boardValue, index) => {
          return (
            <CreateBoardRenderButton key={index} title={boardValue.title} />
          );
        })}
        <CreateBoards />
      </div>
     <BottomBar />
    </div>
  );
}
