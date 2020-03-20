import React, { createContext, useState, useEffect } from 'react';

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
        }),
        [ apiQuery, setApiQuery ] = useState( false );  // Controla cuando permitir realizar la consulta
    
    const { ingredient, category } = searchRecipes;     // Destructuring datos obtenidos del formulario

    /** Hook: Traking State */
    useEffect( () => {

        if( apiQuery ) {
            
            /** Consulta API para obtener categorias */
            const getDataAPIRecipes = async () => {
                const 
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ ingredient }&c=${ category }`,
                    resolve = await fetch( url ),
                    data = await resolve .json();
                
                console .log( 'API Data', data );   
                setRecipes( data .drinks );         // Update State 'recipes'
            }
            getDataAPIRecipes();

        }

    }, [ searchRecipes ] );

    return(
        <RecipesContext.Provider
            value={{
                recipes,
                setSearchRecipes,
                setApiQuery
            }}
        >
            { props .children }
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;