import React, { createContext, useState, useEffect } from 'react';

/** Create Context */
export const CategoriesContext = createContext();

/** Provider: State & Funcions */
const CategoriesProvider = ( props ) => {

    /** Hook: Define State */
    const [ categories, setCategories ] = useState( [] );

    /** Hook: Traking State 'categories' */
    useEffect( () => {

        /** Consulta API para obtener categorias */
        const getDataAPICategories = async () => {
            const 
                url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`,
                resolve = await fetch( url ),
                data = await resolve .json();
            
            console .log( 'API Data', data );
            setCategories( data .drinks );      // Update State

        }
        getDataAPICategories();

    }, [] );

    return (
        <CategoriesContext .Provider
            value={{}}
        >
            { props .children }
        </ CategoriesContext .Provider>
    );
}

export default CategoriesProvider;