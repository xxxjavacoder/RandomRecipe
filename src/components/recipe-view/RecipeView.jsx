import "./RecipeView.scss";

const RecipeView = ({recipe}) => {

    const {name, description, difficulty, cookingTime, servings, ingredients, steps} = recipe;

    return (
        <div className="recipe-view">
            {name}
            {description}
            {difficulty}
            {cookingTime}
            {servings}
            {/*{ingredients}*/}
            {/*{steps}*/}
        </div>
    )
}

export default RecipeView;

// {
//     "recipe": null,
//     "loading": true,
//     "id": 2,
//     "name": "Рис з куркою",
//     "slug": "chicken-rice",
//     "description": "Рис з куркою та овочами",
//     "category": "main",
//     "difficulty": "easy",
//     "cookingTime": 35,
//     "servings": 2,
//     "ingredients": [
//     {
//         "ingredientId": 1,
//         "amount": 300,
//         "unit": "g"
//     },
//     {
//         "ingredientId": 17,
//         "amount": 200,
//         "unit": "g"
//     },
//     {
//         "ingredientId": 5,
//         "amount": 1,
//         "unit": "pcs"
//     },
//     {
//         "ingredientId": 9,
//         "amount": 1,
//         "unit": "pcs"
//     },
//     {
//         "ingredientId": 6,
//         "amount": 2,
//         "unit": "pcs",
//         "optional": true
//     }
// ],
//     "steps": [
//     "Наріжте куряче філе (300 г) кубиками, цибулю — півкільцями, моркву натріть на крупній тертці.",
//     "Розігрійте сковороду з товстим дном або казан з невеликою кількістю олії й обсмажте курку 5 хвилин.",
//     "Додайте цибулю й моркву, смажте ще 4 хвилини, періодично помішуючи.",
//     "Промийте рис (200 г) до прозорої води, висипте до м'яса, залийте окропом приблизно на 1–1,5 см вище рівня крупи, посоліть.",
//     "Накрийте кришкою й варіть на малому вогні 15–18 хвилин, поки випарується вода.",
//     "Додайте подрібнений часник, перемішайте й залиште під кришкою на 5 хвилин."
// ]
// }