import React, { useContext } from 'react';

/** Context */
import { RecipesContext } from '../context/recipes-context';
import { ModalContext } from '../context/modal-context';

/** Components */
import Recipe from '../components/Recipe';

const RecipesList = () => {

    /** Hook: Context */
    const 
        { recipes } = useContext( RecipesContext ),   // Makes context data available 
        { data } = useContext( ModalContext );        // Makes context data available 

    console .log( 'RecipesList', recipes );
    console .log( 'ModalContext', data );

    return (
        <div className="container mt-5 mb-5">
            <h2>Listado de Recetas</h2>
            <div className="row row-cols-1 row-cols-md-3">
                { recipes .map( ( recipe, index ) => (
                    <Recipe 
                        key={ index } 
                        recipe={ recipe }
                    />
                ))}
            </div>
        </div>
    );
}

export default RecipesList;