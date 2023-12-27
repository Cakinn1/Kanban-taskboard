import data from "./data/data.json";
import Nav from "./pages/Nav";
export default function App() {
  console.log(data.boards);

  return (
    <div>
      <Nav />
    </div>
  );
}
