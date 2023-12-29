import Image from "../components/nav/Image";
import AddTask from "../components/nav/AddTask";

interface NavProps {
  setEditTaskModal: (value: boolean) => void;
  nameOfBoard: string;
}

export default function Nav(props: NavProps) {
  const { setEditTaskModal, nameOfBoard } = props;
  return (
    <nav className="bg-[#2B2C37]  flex items-center justify-between">
      <Image />
      <AddTask nameOfBoard={nameOfBoard} setEditTaskModal={setEditTaskModal} />
    </nav>
  );
}
