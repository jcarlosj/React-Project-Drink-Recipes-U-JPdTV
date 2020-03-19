import React from 'react';

/** Components */
import FormSearch from './FormSearch';

const Header = ({ title }) => {     // Destructuring Props
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">{ title }</a>
            <FormSearch />
        </nav>
    );
}

export default Header;