import React, { Fragment } from 'react';

/** Component */
import FormSearch from './components/FormSearch';

/** Context */
import CategoriesProvider from './context/categories-context';

function App() {
  return (
    <CategoriesProvider>
      <FormSearch />
    </CategoriesProvider>
  );
}

export default App;
