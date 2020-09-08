import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import PhoneBook from './PhoneBook';
import ContactProperties from './ContactProperties';

import './app.scss'

function App() {
  return (
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={450}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path='/phoneBook' component={PhoneBook} />
            <Route exact path="/items/:itemId" component={ContactProperties} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
}

export default App;
