/* ==========================================================================
 * ./src/shared/reducers/index.js
 *
 * Root Reducer
 * ========================================================================== */

import { combineReducers } from 'redux-immutablejs';

import routing from '_/reducers/routing';

const rootReducer = combineReducers({
  routing
});

export default rootReducer;

