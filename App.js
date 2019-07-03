import React from 'react';
import { StatusBar } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import AppContainer from './app/AppContainer';
import reducer from './app/reducers';
import rootSaga from './app/sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  const log = createLogger({
    predicate: (getState, action) => action.type !== 'Navigation/COMPLETE_TRANSITION',
    collapsed: (getState, action, logEntry) => !logEntry.error,
  });
  middlewares.push(log);
}

const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="#51adf5"
        barStyle="light-content"
      />
      <AppContainer />
    </Provider>
  );
}
