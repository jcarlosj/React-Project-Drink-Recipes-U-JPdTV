import React, { createContext, useState } from 'react';

/** Create Context */
export const RecipesContext = createContext();

/** Provider: State & Funcions */
const RecipesProvider = ( props ) => {

    const data = 'Data RecipesContext';

    return(
        <RecipesContext.Provider
            value={{
                data
            }}
        >
            { props .children }
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;