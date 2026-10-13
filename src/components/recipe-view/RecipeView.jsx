import "./RecipeView.scss";

import {Link} from "react-router-dom";

const difficultyLabels = {
    easy: "Легко",
    medium: "Середньо",
    hard: "Складно",
};

const unitLabels = {
    g: "г",
    kg: "кг",
    ml: "мл",
    l: "л",
    pcs: "шт.",
};

const RecipeView = ({recipe, ingredientsContext}) => {
    const {name, description, difficulty, cookingTime, servings, ingredients = [], steps = []} = recipe;
    const ingredientById = Object.fromEntries(
        (ingredientsContext.ingredients ?? []).map(item => [String(item.id), item])
    );

    return (
        <article className="recipe-view">
            <Link to="/" className="recipe-view__back-link">Повернутись до списку</Link>
            <header className="recipe-view__hero">
                <span className="recipe-view__eyebrow">РЕЦЕПТ ДНЯ</span>
                <h1 className="recipe-view__title">{name}</h1>
                <p className="recipe-view__description">{description}</p>
                <div className="recipe-view__meta" aria-label="Деталі рецепта">
                    <span className="recipe-view__meta-item recipe-view__meta-item--difficulty">
                        <span className="recipe-view__meta-label">Складність</span>
                        {difficultyLabels[difficulty] ?? difficulty}
                    </span>
                    <span className="recipe-view__meta-item">
                        <span className="recipe-view__meta-icon" aria-hidden="true">◷</span>
                        <span><span className="recipe-view__meta-label">Час</span>{cookingTime} хв</span>
                    </span>
                    <span className="recipe-view__meta-item">
                        <span className="recipe-view__meta-icon" aria-hidden="true">♧</span>
                        <span><span className="recipe-view__meta-label">Порції</span>{servings}</span>
                    </span>
                </div>
            </header>

            {(ingredients.length > 0 || steps.length > 0) && (
                <div className="recipe-view__content">
                    {ingredients.length > 0 && (
                        <section className="recipe-view__section recipe-view__ingredients">
                            <div className="recipe-view__section-heading">
                                <span className="recipe-view__section-kicker">ПІДГОТУЙТЕ</span>
                                <h2>Інгредієнти</h2>
                                <span className="recipe-view__count">{ingredients.length}</span>
                            </div>
                            <ul className="recipe-view__ingredient-list">
                                {ingredients.map((ingredient, index) => {
                                    const ingredientInfo = ingredientById[String(ingredient.ingredientId)];

                                    return (
                                        <li className="recipe-view__ingredient" key={`${ingredient.ingredientId ?? index}-${index}`}>
                                            <span className="recipe-view__ingredient-check" aria-hidden="true">✓</span>
                                            <span className="recipe-view__ingredient-name">
                                                {ingredientInfo?.name ?? `Інгредієнт ${ingredient.ingredientId ?? index + 1}`}
                                                {ingredient.optional && <small> за бажанням</small>}
                                            </span>
                                            <span className="recipe-view__amount">
                                                {ingredient.amount} {unitLabels[ingredient.unit] ?? ingredient.unit}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    )}

                    {steps.length > 0 && (
                        <section className="recipe-view__section recipe-view__steps">
                            <div className="recipe-view__section-heading">
                                <span className="recipe-view__section-kicker">ГОТУЄМО РАЗОМ</span>
                                <h2>Приготування</h2>
                                <span className="recipe-view__count">{steps.length}</span>
                            </div>
                            <ol className="recipe-view__step-list">
                                {steps.map((step, index) => (
                                    <li className="recipe-view__step" key={index}>
                                        <span className="recipe-view__step-number">{String(index + 1).padStart(2, "0")}</span>
                                        <p>{step}</p>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    )}
                </div>
            )}
        </article>
    );
};

export default RecipeView;
