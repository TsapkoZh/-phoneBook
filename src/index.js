import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './components/App';
import rootReducer from './redux/rootReducer.js';

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = createStore(rootReducer, persistedState, devToolsEnhancer());

store.subscribe(()=>{
	localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const app = (
	<Provider store={ store }>
		<App />
	</Provider>
)

ReactDOM.render(app , document.getElementById('root'));
