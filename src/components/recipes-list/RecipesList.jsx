import {useEffect, useState} from "react";
import {useRandomRecipeHttpService} from "../../services/RandomRecipeHttpService.js";

import RecipeCard from "../recipe-card/index.jsx";
import {Select} from "../../partials/select/Select.jsx";

import './RecipesList.scss';

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);

    const {getRecipes, getRecipesCategories} = useRandomRecipeHttpService();

    useEffect(() => {
        getRecipes()
            .then(recipes => setRecipes(recipes));

        getRecipesCategories()
            .then(categories => {
                const options = categories.map((item) => {
                    return {id: item.id, label: item.name, value: item.slug};
                })
                setCategories(options);
            });
    }, []);

    const filteredRecipes = category && category !== "default"
        ? recipes.filter((recipe) => recipe.category === category)
        : recipes;

    return (
        <>
            <div className="recipes-filters">
                <Select
                    className="recipes-filters__category-select"
                    defaultText="Select a category..."
                    value={category ? category : "default"}
                    options={categories}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div className="recipes-list">
                {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </>
    )
}

export default RecipesList;
