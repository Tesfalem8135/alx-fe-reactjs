import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by name, ingredient, or prep time..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: '100%', padding: '8px', marginBottom: '16px', fontSize: '16px' }}
    />
  );
};

export default SearchBar;
