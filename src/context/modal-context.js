import React, { createContext } from 'react';

/** Create Context */
export const ModalContext = createContext();

/** Provider: State & Funcions */
const ModalProvider = ( props ) => {

    const data = 'Hey ModalProvider';

    return (
        <ModalContext .Provider
            value={{ data }}
        >
            { props .children }
        </ModalContext .Provider>
    );
}

export default ModalProvider;