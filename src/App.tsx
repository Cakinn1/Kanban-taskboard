import { useState } from "react";
import data from "./data/data.json";
import Main from "./pages/Main";
import Nav from "./pages/Nav";

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

export default function App() {
  const [kanbanData, setKanbanData] = useState<KabanDataColumnProps[]>(
    data.boards[0].columns
  );
  //  we are filtering it by the name "platform launch",
  //  change later to make dynamic

  return (
    <div className="h-screen">
      <Nav />
      <Main kanbanData={kanbanData} />
    </div>
  );
}
