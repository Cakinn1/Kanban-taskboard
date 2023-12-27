import data from "./data/data.json";
import Main from "./pages/Main";
import Nav from "./pages/Nav";
export default function App() {
  console.log(data.boards);

  return (
    <div className="h-screen">
      <Nav />
      <Main />
    </div>
  );
}
