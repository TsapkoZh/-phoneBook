import React from 'react';

import PhoneBook from './PhoneBook';
import ContactProperties from './ContactProperties';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Switch>
          <Route exact path='/phoneBook' component={PhoneBook} />
          <Route exact path="/items/:itemId" component={ContactProperties} />
      </Switch>
    </div>
  );
};

export default App;
