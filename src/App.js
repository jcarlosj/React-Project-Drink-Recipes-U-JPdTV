import React, { Fragment } from 'react';

/** Component */
import Header from './components/Header';
import FormSearch from './components/FormSearch';

/** Context */
import CategoriesProvider from './context/categories-context';

function App() {
  return (
    <CategoriesProvider>
      <Header />
      <FormSearch />
    </CategoriesProvider>
  );
}

export default App;
