import { createContext } from 'react';

const IngredientsContext = createContext({
    ingredients: [],
    loading: true,
});

export default IngredientsContext;
