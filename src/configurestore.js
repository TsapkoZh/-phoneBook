import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';

import createRootReducer from './redux/rootReducer.js';

const persistedState = localStorage.getItem('reduxState') 
                       ? { contacts: JSON.parse(localStorage.getItem('reduxState')) }
                       : {}

export const history = createBrowserHistory();

export default function configureStore(persistedState) {
  const store = createStore(
    createRootReducer(history),
    persistedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
			),
			devToolsEnhancer(),
		),
  )

  return store
}

export const store = configureStore(persistedState);

store.subscribe(()=>{
	localStorage.setItem('reduxState', JSON.stringify(store.getState().contacts))
})