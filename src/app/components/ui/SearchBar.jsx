"use client"

import InputBox from "./InputBox";
import SearchButton from "./SearchButton";
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm); 
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className="relative w-[200px]">
      <InputBox 
        size="s"
        placeholder="Search..."
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
        <SearchButton onClick={handleSearch} /> 
      </div>
    </div>
  );
};

export default SearchBar;
