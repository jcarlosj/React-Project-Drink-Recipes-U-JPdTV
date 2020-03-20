import React, { Fragment } from 'react';

/** Component */
import Header from './components/Header';

/** Context */
import CategoriesProvider from './context/categories-context';
import RecipesProvider from './context/recipes-context';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <Header title="Recetas de bebidas" />
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
