import React, { useContext } from 'react';

/** Context */
import { RecipesContext } from '../context/recipes-context';

const RecipesList = () => {

    /** Hook: Context */
    const { recipes } = useContext( RecipesContext );   // Makes context data available 

    console .log( 'RecipesList', recipes );

    return(
        <div className="container mt-5 mb-5">
            <h2>Listado de Recetas</h2>
            <div className="row row-cols-1 row-cols-md-3">
                { recipes .map( ( recipe, index ) => {

                    const { idDrink, strDrink, strDrinkThumb } = recipe;
                
                    return (
                        <div 
                            className="col mb-4"
                            key={ index }
                        >
                            
                            <div className="card mb-3">
                                <img src={ strDrinkThumb } className="card-img-top" alt={ strDrink } />
                                <div className="card-body">
                                    <h5 className="card-title">{ strDrink }</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RecipesList;