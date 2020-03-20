import React, { createContext, useState } from 'react';

/** Create Context */
export const RecipesContext = createContext();

/** Provider: State & Funcions */
const RecipesProvider = ( props ) => {

    /** Hook: Define State */
    const 
        [ recipes, setRecipes ] = useState([]),
        [ searchRecipes, setSearchRecipes ] = useState({
            ingredient: '',
            category: ''
        });

    return(
        <RecipesContext.Provider
            value={{
                setSearchRecipes
            }}
        >
            { props .children }
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;