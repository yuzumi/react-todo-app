import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import todos from './reducers/todos';
import App from './containers/App/App';
import './styles/index.scss';

import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers({
    todos
}));

const RootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    RootElement
);

serviceWorker.unregister();
