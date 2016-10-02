/* ==========================================================================
 * ./src/shared/store/configureStore.js
 *
 * Configure Redux Store
 * ========================================================================== */

import Immutable from 'immutable';
import path from 'path';
import promiseMiddleware from '_/utils/promiseMiddleware';
import rootReducer from '_/reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';

const generateMiddlware = (history) => {
  const universalMiddleware = [
    thunk,
    promiseMiddleware,
    routerMiddleware(history)
  ];

  let middleware = {};
  let allComposeElements = [];

  if (process.env.BROWSER && process.env.NODE_ENV === 'development') {
    middleware = applyMiddleware(...universalMiddleware);
    allComposeElements = [
      middleware,
      require('$/devTools').default.instrument()
    ];
  } else {
    middleware = applyMiddleware(...universalMiddleware);
    allComposeElements = [middleware];
  }

  return allComposeElements;
};

const finalCreateStore = (history) => {
  const elements = generateMiddlware(history);
  return compose(...elements)(createStore);
};

const initialState = new Immutable.Map();

export function configureStore(state = initialState, history) {
  const store = finalCreateStore(history)(rootReducer, state);

  if (module.hot) {
    module.hot.accept(path.resolve(__dirname, '..', 'reducers'), () => {
      const nextRootReducer = require('_/reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

