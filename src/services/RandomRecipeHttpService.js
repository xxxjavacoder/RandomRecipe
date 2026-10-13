import {useHttp} from '../hooks/useHttp.js';

const API_URL = 'http://localhost:3000';

export const useRandomRecipeHttpService = () => {
    const {loading, request, error} = useHttp();

    // Ingredient Categories
    const getIngredientCategories = async () => {
        const url = `${API_URL}/categories`;
        const response = await request(url);
        return await response;
    }

    // Ingredients
    const getIngredients = async () => {
        const url = `${API_URL}/ingredients`;
        const response = await request(url);
        return await response;
    }

    // Recipes Categories
    const getRecipesCategories = async () => {
        const url = `${API_URL}/recipeCategories`;
        const response = await request(url);
        return await response;
    }

    // Recipes
    const getRecipes = async () => {
        const url = `${API_URL}/recipes`;
        const response = await request(url);
        return await response;
    }

    const getRecipe = async (id) => {
        const url = `${API_URL}/recipes`;
        const response = await request(url);
        const recipe = await response.find(item => item.id === parseInt(id));
        return await recipe;
    }

    return {
        getIngredientCategories,
        getIngredients,
        getRecipesCategories,
        getRecipes,
        getRecipe,
        loading,
        request,
        error
    }
}
