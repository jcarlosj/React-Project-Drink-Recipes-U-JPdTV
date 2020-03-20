import React from 'react';

const Recipe = ({ recipe }) => {        // Destructuring Props

    if( Object .keys( recipe ) .length === 0 ) return null;

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
                    >Ver receta</button>
                </div>
            </div>

        </div>
    );
}

export default Recipe;