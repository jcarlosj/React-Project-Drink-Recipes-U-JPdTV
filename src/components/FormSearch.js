import React, { useContext } from 'react';
import { CategoriesContext } from '../context/categories-context';

const FormSearch = () => {

    /** Hook: Context */
    const { data, setData } = useContext( CategoriesContext );     // Makes context data available 

    console .log( `Datos de '${ data }' disponibles en el Componente 'FormSearch'`);
    alert( `Datos de '${ data }' disponibles en el Componente 'FormSearch'`);

    return (
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
            <form className="form-inline my-2 my-lg-0">
                <input
                    type="text" 
                    name="ingredient"
                    placeholder="Ingrediente" 
                    className="form-control mr-sm-2" 
                />
                <select 
                    name="category"
                    className="form-control mr-sm-2"
                >
                    <option value="">Selecciona categoría...</option>
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