import { IoIosSunny } from "react-icons/io";
import Search from "./Search";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/food-network.png";
const Navbar = () => {
  return (
    <nav className='absolute  top-0 left-0 flex justify-between items-center w-full p-3'>
      <div className='w-20'>
        <img src={logo} className='w-full' />
      </div>
      <Search placeholder='Search Best Food'></Search>
      <div className='flex space-x-2'>
        <div className=' border-orange-300  border bg-orange-500 bg-opacity-15 rounded-md p-1 cursor-pointer'>
          <IoIosSunny size={"1.2rem"} className='text-orange-500' />
        </div>
        <div className=' border-orange-300  border bg-orange-500 bg-opacity-15 rounded-md p-1 cursor-pointer'>
          <TbLayoutSidebarRightCollapse size={"1.2rem"} />
        </div>
        <div className='bg-gray-500 bg-opacity-15 rounded-md p-1 cursor-pointer'>
          <RxHamburgerMenu size={"1.2rem"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
