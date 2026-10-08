import {useHttp} from '../hooks/useHttp.js';

const API_URL = 'http://localhost:3000';

export const useRandomRecipeHttpService = () => {
    const {loading, request, error} = useHttp();

    // Categories
    const getCategories = async () => {
        const url = `${API_URL}/categories`;
        const response = await request(url);
        return await response;
    }

    // Ingredients
    const getProducts = async () => {
        const url = `${API_URL}/ingredients`;
        const response = await request(url);
        return await response;
    }

    // Recipes
    const getRecipes = async () => {
        const url = `${API_URL}/recipes`;
        const response = await request(url);
        return await response;
    }

    return {
        getCategories,
        getProducts,
        getRecipes,
        loading,
        request,
        error
    }
}
