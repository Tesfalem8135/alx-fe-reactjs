import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const [editing, setEditing] = useState(false);

  if (!recipe) return <div>Recipe not found.</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Add more fields as needed */}
      {editing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setEditing(false)} />
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
};

export default RecipeDetails;
