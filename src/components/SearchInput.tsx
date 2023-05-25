import React, { ChangeEventHandler, useState } from "react";
import { FaSearch } from "react-icons/fa"
interface SearchInputProps {
  value: string;
  onChange: (value:  React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ()  => {
    const [searchValue, setSearchValue] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
      };

  return (  
    <div className="flex px-20 gap-2 flex-row m-2 w-full items-center">
 <input
    className="flex rounded-3xl  h-20 text-black text-4xl w-full py-5 px-10 my-20 placeholder:text-xl placeholder:text-center"
      type="text"   
      value={searchValue}
      placeholder="Search / Filter"
   
      onChange={handleChange}
    />
    <div className="">
    <FaSearch  size={50} color="white"/>
    </div>
    </div>
   
  );
};

export default SearchInput;