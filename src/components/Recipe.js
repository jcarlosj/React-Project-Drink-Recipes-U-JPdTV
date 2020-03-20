import React, { useContext } from 'react';

/** Context */
import { ModalContext } from '../context/modal-context';

const Recipe = ({ recipe }) => {        // Destructuring Props

    /** Hook: Context */
    const { setIdRecipe } = useContext( ModalContext );        // Makes context data available 

    /** Validate Data */
    if( Object .keys( recipe ) .length === 0 ) return null;

    console .log( 'ModalContext', setIdRecipe );

    const { idDrink, strDrink, strDrinkThumb } = recipe;

    return(     
                    
        <div className="col mb-4">
            
            <div className="card mb-3">
                <img src={ strDrinkThumb } className="card-img-top" alt={ strDrink } />
                <div className="card-body">
                    <h5 className="card-title">{ strDrink }</h5>
                    <button 
                        type="button" 
                        className="btn btn-secondary btn-lg btn-block"
                        onClick={ () => setIdRecipe( idDrink ) }
                    >Ver receta</button>
                </div>
            </div>

        </div>
    );
}

export default Recipe;