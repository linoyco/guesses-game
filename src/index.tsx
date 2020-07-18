import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import rootSaga from './State/Sagas/index';
import { rootReducer } from './State/Reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer(), compose(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));