import React from 'react';

import PhoneBook from './PhoneBook'
import ContactProperties from './ContactProperties';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={PhoneBook} />
        <Route exact path="/items/:itemId" component={ContactProperties} />
      </div>
    </BrowserRouter>
  );
};

export default App;
