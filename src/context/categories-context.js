import React, { createContext, useState } from 'react';

/** Create Context */
export const CategoriesContext = createContext();

/** Provider: State & Funcions */
const CategoriesProvider = ( props ) => {

    /** Hook: Define State */
    const [ data, setData ] = useState( 'Categories Context' );

    return (
        <CategoriesContext .Provider
            value={{
                data,
                setData
            }}
        >
            { props .children }
        </ CategoriesContext .Provider>
    );
}

export default CategoriesProvider;