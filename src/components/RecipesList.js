import React, { useContext } from 'react';

/** Context */
import { RecipesContext } from '../context/recipes-context';

/** Components */
import Recipe from '../components/Recipe';

const RecipesList = () => {

    /** Hook: Context */
    const { recipes } = useContext( RecipesContext );   // Makes context data available 

    console .log( 'RecipesList', recipes );

    return (
        <div className="container mt-5 mb-5">
            <h2>Listado de Recetas</h2>
            <div className="row row-cols-1 row-cols-md-3">
                { recipes .map( ( recipe, index ) => (
                    <Recipe key={ index } />
                ))}
            </div>
        </div>
    );
}

export default RecipesList;