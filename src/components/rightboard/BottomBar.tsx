import { MdWbSunny } from "react-icons/md";
import { PiMoonFill } from "react-icons/pi";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
export default function BottomBar() {
  return (
    <div className="px-10 mt-auto mb-8 text-[#828fa3] space-y-3">
      <div className="bg-[#20212C]  text-lg w-full h-12 flex justify-between px-10 items-center rounded-md">
        <PiMoonFill />
        <MdToggleOff className="text-5xl cursor-pointer text-[#635fc7]" />
        <MdWbSunny />
      </div>
      <div className="flex  justify-center gap-x-2 items-center">
        <GoEyeClosed />
        <h1>Hide Sidebar</h1>
      </div>
    </div>
  );
}
