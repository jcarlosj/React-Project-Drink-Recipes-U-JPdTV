import React, { Fragment } from 'react';

/** Component */
import Header from './components/Header';
import RecipesList from './components/RecipesList';

/** Context */
import CategoriesProvider from './context/categories-context';
import RecipesProvider from './context/recipes-context';
import ModalProvider from './context/modal-context';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <Header title="Recetas de bebidas" />
        <ModalProvider>
          <RecipesList />
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
