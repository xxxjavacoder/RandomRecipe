import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";

import {useRandomRecipeHttpService} from "../../services/RandomRecipeHttpService.js";
import RecipeView from "../../components/recipe-view/index.jsx";

const RecipePage = () => {
    const params = useParams();
    const { getRecipe, loading } = useRandomRecipeHttpService();
    const [state, setState] = useState({
        recipe: null,
        loading: true,
    });

    useEffect(() => {
        getRecipe(params.id)
            .then(recipe => setState(prevState => ({
                recipe: {
                    ...prevState,
                    ...recipe
                },
                loading: loading
            })));

    }, [params.id])

    console.log(state);

    return (
        <>
            {state.loading ? "Loading..." : <RecipeView recipe={state.recipe} />}
        </>
    )
}

export default RecipePage