import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
// Search input component for filtering users
const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="flex   gap-2 flex-row bg-black  w-full items-center">
      <input
        className="flex h-20 sm:scale-75 sm:w-full text-black sm:text-2xl lg:text-4xl w-full py-5 lg:px-10 my-10 placeholder:text-3xl placeholder:text-center"
        type="text"
        value={value}
        placeholder="Search / Filter"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
