import React, { ChangeEventHandler, useState } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value:  React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps)  => {
 
  return (  
    <input
    className=""
      type="text"
      value={value}
   
      onChange={onChange}
    />
  );
};

export default SearchInput;