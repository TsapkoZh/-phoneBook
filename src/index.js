import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import {history, store} from './configurestore'

const app = (
	<Provider store={ store }>
		<ConnectedRouter history={history}>
			<App />
    </ConnectedRouter>
	</Provider>
)

ReactDOM.render(app , document.getElementById('root'));
