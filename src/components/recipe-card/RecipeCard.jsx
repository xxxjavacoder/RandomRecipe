import './RecipeCard.scss';

const RecipeCard = ({recipe}) => {
    const {name, description, difficulty, cookingTime, servings} = recipe;

    return (
        <article className="recipe-card">
            <div className="recipe-card__topline">
                <span className="recipe-card__eyebrow">СЬОГОДНІ НА СТОЛІ</span>
                <span className="recipe-card__sparkle" aria-hidden="true">✦</span>
            </div>
            <h2 className="recipe-card__header">{name}</h2>
            <p className="recipe-card__description">{description}</p>
            <div className="recipe-card__details">
                <span className="recipe-card__badge">{difficulty}</span>
                <span className="recipe-card__detail"><span aria-hidden="true">◷</span> {cookingTime}</span>
                <span className="recipe-card__detail"><span aria-hidden="true">♧</span> {servings}</span>
            </div>
        </article>
    )
}

export default RecipeCard;
