import React, { useContext, useState } from 'react';

/** Context */
import { ModalContext } from '../context/modal-context';

/** Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

/** Modal: Material UI */
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
  
const useStyles = makeStyles( theme => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


/** Component */
const Recipe = ({ recipe }) => {        // Destructuring Props

    /** Hook: Define State (Configuración para Material UI)
     * getModalStyle no es una función pura, rodamos el estilo solo en el primer render */
    const 
        [ modalStyle ] = useState( getModalStyle ),
        [ open, setOpen ] = useState( false );

    const classes = useStyles();

    const handleOpen = () => {
        setOpen( true );
    };

    const handleClose = () => {
        setOpen( false );
    };

    /** Hook: Context */
    const { setIdRecipe, detailRecipe, setDetailRecipe } = useContext( ModalContext );        // Makes context data available 

    /** Validate Data */
    if( Object .keys( recipe ) .length === 0 ) return null;

    const   /** Destructuring */
        { idDrink, strDrink, strDrinkThumb } = recipe,      // Props
        { strInstructions } = detailRecipe;     // State 'detailRecipe' of 'ModalContext'

    /** Methods or Functions */
    const showIngredientList = () => {
        let ingredients = [];

        for( let i = 0; i < 16; i++ ) {
            /** In case it is not null, add the ingredients */
            if( detailRecipe[ `strIngredient${ i }` ] ) {
                ingredients .push(
                    <li key={ i }>
                        <strong>{ detailRecipe[ `strIngredient${ i }` ] }</strong> <i>{ detailRecipe[ `strMeasure${ i }` ] }</i>
                    </li>
                );
            }
        }

        return ingredients;
    }

    return(     
                    
        <div className="col mb-4">
            
            <div className="card mb-3">
                <img src={ strDrinkThumb } className="card-img-top" alt={ strDrink } />
                <div className="card-body">
                    <h5 className="card-title">{ strDrink }</h5>
                    <button 
                        type="button" 
                        className="btn btn-secondary btn-lg btn-block"
                        onClick={ () => {
                            setIdRecipe( idDrink )
                            handleOpen();
                        }}
                    >Ver receta</button>

                    <Modal
                        open={ open }               // Open the modal window
                        onClose={ () => {
                            handleClose();          // Close the modal window
                            setDetailRecipe({});    // Update State 'detailRecipe' of 'ModalContext'
                            setIdRecipe( null );    // Update State 'idRecipe' of 'ModalContext'
                        }}
                    >
                        <div
                            style={ modalStyle }          // Modal window position CSS style
                            className={ classes .paper }  // General CSS styles of the modal window ('paper' css class name)
                        >
                            
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={ strDrinkThumb } className="card-img" alt={ strDrink } />
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">{ strDrink }</h4>
                                        { strInstructions
                                            ?   <>
                                                    <h5 className="card-title">Instructions</h5>
                                                    <p className="card-text">{ strInstructions }</p>
                                                </>
                                            :   null
                                        }
                                        <h5 className="card-title">Ingredients</h5>
                                        <ul>
                                            { showIngredientList() }
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Modal>
                </div>
            </div>

        </div>
    );
}

export default Recipe;