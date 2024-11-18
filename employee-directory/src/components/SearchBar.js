import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <input 
        type="text" 
        placeholder="Search employees..." 
        className="w-full p-2 border border-gray-300 rounded-lg"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;