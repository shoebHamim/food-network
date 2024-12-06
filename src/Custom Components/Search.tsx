import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
interface SearchProps {
  placeholder: string;
}
const Search = ({placeholder}:SearchProps) => {
  return ( <div className='relative cursor-pointer'>
    <Input placeholder={placeholder} className='pr-10'></Input>
    <div className='absolute right-1 top-1/2 transform -translate-y-1/2 border-orange-300  border bg-orange-500 bg-opacity-15 rounded-md p-[0.4rem]'>
      <IoSearchSharp className='text-orange-500' />
    </div>
  </div> );
}
 
export default Search;