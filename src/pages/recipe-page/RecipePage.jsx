import { useParams } from "react-router-dom";
import {useEffect, useState, useContext} from "react";

import IngredientContext from "../../context/IngredientContext.js";

import {useRandomRecipeHttpService} from "../../services/RandomRecipeHttpService.js";
import RecipeView from "../../components/recipe-view/index.jsx";

const RecipePage = () => {
    const params = useParams();
    const { getRecipe } = useRandomRecipeHttpService();
    const [state, setState] = useState({
        recipe: null,
        loading: true,
    });

    const ingredientsContext = useContext(IngredientContext);

    useEffect(() => {
        getRecipe(params.id)
            .then(recipe => setState(prevState => ({
                ...prevState,
                recipe: {
                    ...recipe
                },
                loading: false
            })));

    }, [params.id])

    return (
        <>
            {
                !state.loading && !ingredientsContext.loading ?
                    <RecipeView recipe={state.recipe} ingredientsContext={ingredientsContext} /> : "Loading..."
            }
        </>
    )
}

export default RecipePage