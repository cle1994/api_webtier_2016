/* ==========================================================================
 * ./src/shared/routes/index.js
 *
 * App routes
* ========================================================================== */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '_/containers/App';
import Documentation from '_/containers/Documentation';

export default (
  <Route name="app" path="/" component={App}>
    <Route path="/documentation" component={Documentation} />
  </Route>
);

