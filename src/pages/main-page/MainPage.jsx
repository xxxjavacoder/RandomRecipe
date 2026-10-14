import "./MainPage.scss";

import RecipesList from "../../components/recipes-list/index.jsx";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <div className="get-random-link-block">
                <Link className="get-random-link-block__link" to="/random-recipe">Get Random Recipe</Link>
            </div>
            <RecipesList />
        </>
    )
}

export default MainPage;