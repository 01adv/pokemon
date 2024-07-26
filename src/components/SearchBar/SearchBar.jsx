import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-40 sm:w-52 md:w-80 flex items-center px-4 bg-slate-100 rounded-full">
      <input
        type="text"
        placeholder="Search Pokemon"
        className="w-full text-base bg-transparent py-2 outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
