import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import home from './containers/Home/reducer'
import header from './containers/Header/reducer'
import search from './containers/SearchPage/reducer'
import titles from './containers/Titles/reducer'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    home,
    header,
    search,
    titles,
})

const store = createStore(
    rootReducer,
    // initialState,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
