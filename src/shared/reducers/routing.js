/* ==========================================================================
 * ./src/reducers/routing.js
 *
 * React router redux routing reducer for Immutable
 * ========================================================================== */

import Immutable from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = new Immutable.Map({
  locationBeforeTransitions: null
});

export default (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload
    });
  }

  return state;
};

