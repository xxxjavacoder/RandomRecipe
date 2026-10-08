import {useEffect, useState} from "react";
import {useRandomRecipeHttpService} from "../../services/RandomRecipeHttpService.js";

import RecipeCard from "../recipe-card/index.jsx";
import './RecipesList.scss';

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    const {getRecipes} = useRandomRecipeHttpService();

    useEffect(() => {
        getRecipes()
            .then(recipes => setRecipes(recipes));
    }, []);

    return (
        <div className="recipes-list">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipesList;
