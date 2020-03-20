import React, { createContext, useState, useEffect } from 'react';

/** Create Context */
export const ModalContext = createContext();

/** Provider: State & Funcions */
const ModalProvider = ( props ) => {

    /** Hook: Define State */
    const [ idRecipe, setIdRecipe ] = useState( null );

    /** Hook: Traking State 'idRecipe' */
    useEffect( () => {

        /** Consulta API para obtener categorias */
        const getDataAPIRecipe = async () => {

            /** Validate */
            if( ! idRecipe ) return null;

            const 
                url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ idRecipe }`,
                resolve = await fetch( url ),
                data = await resolve .json();
            
            console .log( 'API Data', data );

        }
        getDataAPIRecipe();

    }, [ idRecipe ] );

    return (
        <ModalContext .Provider
            value={{ setIdRecipe }}
        >
            { props .children }
        </ModalContext .Provider>
    );
}

export default ModalProvider;