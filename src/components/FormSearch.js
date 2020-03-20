import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/categories-context';

const FormSearch = () => {

    /** Hook: Context */
    const { categories } = useContext( CategoriesContext );     // Makes context data available 

    /** Hook: Define State */
    const [ dataForm , setDataForm ] = useState({
        ingredient: '',
        category: ''
    });

    console .log( 'Categorias', categories );

    /** Update form field values */
    const onChangeDataForm = event => {
        setDataForm({
            ...dataForm,
            [ event .target .name ]: event .target .value
        });
    }

    return (
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
            <form className="form-inline my-2 my-lg-0">
                <input
                    type="text" 
                    name="ingredient"
                    placeholder="Ingrediente" 
                    className="form-control mr-sm-2" 
                    onChange={ onChangeDataForm }
                />
                <select 
                    name="category"
                    className="form-control mr-sm-2"
                    onChange={ onChangeDataForm }
                >
                    <option value="">Selecciona categoría...</option>
                    { categories .map( ( category, index ) => (
                        <option 
                            key={ index } 
                            value={ category .strCategory }
                        >{ category .strCategory }</option>
                    ))}
                </select>
                <button 
                    type="submit"
                    className="btn btn-outline-primary my-2 my-sm-0" 
                >Buscar</button>
            </form>
        </div>
    );
}

export default FormSearch;