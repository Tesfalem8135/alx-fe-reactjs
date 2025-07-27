
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
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
