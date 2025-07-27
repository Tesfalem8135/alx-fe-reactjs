import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    // Optionally, redirect or show a message
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
