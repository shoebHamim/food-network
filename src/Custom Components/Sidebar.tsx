import { CgMenuGridO } from "react-icons/cg";
import { LuLayoutGrid, LuSend } from "react-icons/lu";
import { PiVideoLight } from "react-icons/pi";
import { TbSmartHome } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-center h-full  space-y-5 px-3'>
      <div className="border-orange-300  border bg-orange-500 bg-opacity-15 rounded-md p-1 cursor-pointer">
      <TbSmartHome size={"1.3rem"} className="text-orange-400" />
      </div>
      <div className=" bg-gray-500 bg-opacity-15 rounded-md p-1 cursor-pointer">
      <LuLayoutGrid size={"1.3rem"}/>
      </div>
      <div className=" bg-gray-500 bg-opacity-15 rounded-md p-1 cursor-pointer">
      <LuSend size={"1.3rem"}/>
      </div>
      <div className=" bg-gray-500 bg-opacity-15 rounded-md p-1 cursor-pointer">
      <PiVideoLight size={"1.3rem"}/>
      </div>
      <div className=" bg-gray-500 bg-opacity-15 rounded-md p-1 cursor-pointer">
      <CgMenuGridO size={"1.3rem"}/>
      </div>

    </div>
  );
};

export default Sidebar;
