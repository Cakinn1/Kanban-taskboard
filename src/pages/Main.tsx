import RightBoard from "./RightBoard";

export default function Main() {
  return (
    <section className="flex" style={{ height: "calc(100vh - 100px)" }}>
      <RightBoard />
      <div className="flex-1 p-6 ml-[300px] bg-[#20212C]">d</div>
    </section>
  );
}
