import Image from "../components/nav/Image";
import AddTask from "../components/nav/AddTask";
export default function Nav() {
  return (
    <nav className="bg-[#2B2C37]  flex items-center justify-between">
      <Image />
      <AddTask />
    </nav>
  );
}
