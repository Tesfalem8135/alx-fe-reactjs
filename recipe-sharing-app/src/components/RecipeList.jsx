import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';


const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes);

  const listToShow = filteredRecipes.length > 0 || useRecipeStore.getState().searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {listToShow.length === 0 ? (
        <p>No recipes found matching your search.</p>
      ) : (
        listToShow.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
