
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  // Array to store favorite recipe IDs
  favorites: [],
  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({ favorites: state.favorites.filter(id => id !== recipeId) })),
  // Array to store recommended recipes
  recommendations: [],
  // Generate recommendations based on favorites (mock logic)
  generateRecommendations: () => set((state) => {
    // Recommend recipes that are not already favorited, with similar ingredients or random
    const favoriteRecipes = state.recipes.filter(recipe => state.favorites.includes(recipe.id));
    // Simple mock: recommend recipes with at least one matching ingredient with favorites
    const recommended = state.recipes.filter(recipe => {
      if (state.favorites.includes(recipe.id)) return false;
      return favoriteRecipes.some(fav => fav.ingredients?.some(ing => recipe.ingredients?.includes(ing)));
    });
    // If no recommendations, fallback to random non-favorite recipes
    const fallback = state.recipes.filter(recipe => !state.favorites.includes(recipe.id));
    return { recommendations: recommended.length ? recommended : fallback.slice(0, 3) };
  }),
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
  ,
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  }))
  ,
  setSearchTerm: (term) => set((state) => {
    const newTerm = term;
    // Update filteredRecipes whenever searchTerm changes
    const filtered = state.recipes.filter(recipe => {
      // Search by title, ingredients, or preparation time
      const titleMatch = recipe.title?.toLowerCase().includes(newTerm.toLowerCase());
      const ingredientsMatch = recipe.ingredients?.join(' ').toLowerCase().includes(newTerm.toLowerCase());
      const prepTimeMatch = recipe.prepTime?.toString().includes(newTerm);
      return titleMatch || ingredientsMatch || prepTimeMatch;
    });
    return { searchTerm: newTerm, filteredRecipes: filtered };
  }),
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe => {
      const titleMatch = recipe.title?.toLowerCase().includes(state.searchTerm.toLowerCase());
      const ingredientsMatch = recipe.ingredients?.join(' ').toLowerCase().includes(state.searchTerm.toLowerCase());
      const prepTimeMatch = recipe.prepTime?.toString().includes(state.searchTerm);
      return titleMatch || ingredientsMatch || prepTimeMatch;
    })
  }))
}));
