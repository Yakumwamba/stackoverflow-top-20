import React, { ChangeEventHandler, useState } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: ChangeEventHandler<HTMLElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
 
  return (
    <input
      type="text"
      value={value}
      // @ts-ignore
      onChange={onChange}
    />
  );
};

export default SearchInput;