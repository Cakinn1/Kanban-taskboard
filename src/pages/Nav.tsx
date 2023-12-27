import React from "react";
import Image from "../components/nav/Image";

export default function Nav() {
  return (
    <nav className="bg-[#2B2C37]  flex items-center justify-between">
      <Image />
      <div className="px-10 border-b-[#3E3F4E] justify-between flex items-center border-b flex-1 h-24">
        <h1 className="font-bold">Platform Lanunch</h1>
      </div>
    </nav>
  );
}
