// Framework
import React from 'react';
import ReactDOM from 'react-dom';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

// Redux/Saga
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import App from './App';

// Reducers
import { CircuitsReducer } from './reducers/Circuits';

import rootSaga from './saga/RootReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
    CircuitsReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        reduxDevTools
    )
);

// run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
