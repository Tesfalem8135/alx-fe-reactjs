import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';


const RecipeList = () => {

  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const listToShow = filteredRecipes.length > 0 || useRecipeStore.getState().searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {listToShow.length === 0 ? (
        <p>No recipes found matching your search.</p>
      ) : (
        listToShow.map(recipe => {
          const isFavorite = favorites.includes(recipe.id);
          return (
            <div key={recipe.id} style={{ border: '1px solid #eee', margin: '8px', padding: '8px' }}>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
              <button
                style={{ background: isFavorite ? '#ffd700' : '#e0e0e0', marginTop: 4 }}
                onClick={() => isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)}
              >
                {isFavorite ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecipeList;
