import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);  // Calls the parent component's search handler with the query
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search artifacts by category, region, or era"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
