/* ==========================================================================
 * ./src/server/utils/fetchComponentData.js
 *
 * Grab component data and state before rendering server side.
 * ========================================================================== */

import Promise from 'bluebird';

export default function fetchComponentData(dispatch, components, params, query) {
  const needs = components.reduce((prev, current) => (current.need || [])
    .concat((current.WrappedComponent ? current.WrappedComponent.need : []) || [])
    .concat(prev), []);

  const promises = needs.map((need) => dispatch(need(params, query)));
  return Promise.all(promises);
}

