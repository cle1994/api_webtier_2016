/* ==========================================================================
 * ./src/server/bootstrapClient.js
 *
 * Bootstrap React App and Server Side Render
* ========================================================================== */

const logger = require('+/logger')('server:bootstrapClient');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import Helmet from 'react-helmet';
import Immutable from 'immutable';

import fetchComponentData from '@/utils/fetchComponentData';
import routes from '_/routes';
import renderView from '@/utils/renderView';
import { configureStore } from '_/store';

export default function (request, reply) {
  match({
    routes,
    location: { pathname: request.path }
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      reply(error.message).code(500);
    } else if (redirectLocation) {
      reply.redirect(`${redirectLocation.pathname}${redirectLocation.search}`).code(301);
    } else if (!renderProps) {
      reply('Page not found').code(404);
    } else {
      const store = configureStore(new Immutable.Map());

      const InitialView = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      fetchComponentData(
        store.dispatch,
        renderProps.components,
        renderProps.params,
        renderProps.location.query
      ).then(() => {
        const initialState = store.getState();
        const InitialViewAsString = renderToString(InitialView);
        const head = Helmet.rewind();

        return renderView(InitialViewAsString, initialState, head);
      }).then((rendering) => reply(rendering).type('text/HTML')).catch((err) => {
        logger.error(err.toString());
        return reply(err);
      });
    }
  });
}

