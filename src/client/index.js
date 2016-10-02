/* ==========================================================================
 * ./src/client/index.js
 *
 * Client Root
 * ========================================================================== */

import Immutable from 'immutable';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from '_/store';
import routes from '_/routes';
import showDevTools from '$/devTools/show';

import '~/styles/_index.scss';

// eslint-disable-next-line no-underscore-dangle, no-undef
const initialState = Immutable.fromJS(window.__INITIAL_STATE__);
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.get('routing').toJS()
});

render(
  <Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>,
  document.getElementById('root') // eslint-disable-line no-undef
);

if (process.env.NODE_ENV === 'development') {
  showDevTools(store);
}

