import React, { createContext, useState } from 'react';

/** Create Context */
export const ModalContext = createContext();

/** Provider: State & Funcions */
const ModalProvider = ( props ) => {

    /** Hook: Define State */
    const [ idRecipe, setIdRecipe ] = useState( null );

    return (
        <ModalContext .Provider
            value={{ setIdRecipe }}
        >
            { props .children }
        </ModalContext .Provider>
    );
}

export default ModalProvider;