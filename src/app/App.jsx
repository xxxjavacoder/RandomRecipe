import './App.scss';

import {Routes, Route} from "react-router-dom";
import IngredientsContext from '../context/IngredientContext.js';
import {useRandomRecipeHttpService} from "../services/RandomRecipeHttpService.js";

import Header from '../layout/header/index.jsx';
import Footer from '../layout/footer/index.jsx';
import Container from '../layout/container/index.jsx';

import MainPage from "../pages/main-page/index.jsx";
import RecipePage from "../pages/recipe-page/index.jsx";
import {useEffect, useState} from "react";

function App() {
    const [ingredients, setIngredients] = useState({ingredients: [], loading: true});
    const { getIngredients } = useRandomRecipeHttpService();

    useEffect(() => {
        getIngredients().then(response => setIngredients({ingredients: [...response], loading: false}));
    }, [])

    return (
        <>
            <Header />
            <div className="app">
                <Container>
                    <IngredientsContext.Provider value={ingredients}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/recipes/:id" element={<RecipePage />} />
                        </Routes>
                    </IngredientsContext.Provider>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default App;
