import React, { Fragment } from 'react';

/** Component */
import Header from './components/Header';

/** Context */
import CategoriesProvider from './context/categories-context';

function App() {
  return (
    <CategoriesProvider>
      <Header title="Recetas de bebidas" />
    </CategoriesProvider>
  );
}

export default App;
