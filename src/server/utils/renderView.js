/* ==========================================================================
 * ./src/server/utils/renderView.js
 *
 * Server side rendering of HTML
 * ========================================================================== */

import _ from 'lodash';
import fs from 'fs-promise';
import path from 'path';
import Promise from 'bluebird';

export default function renderView(html, initialState, head) {
  const environment = process.env.NODE_ENV || 'development';
  const indexPath = path.resolve(__dirname, '..', 'templates', 'index.html');

  return fs.readFile(indexPath, 'utf8').then((htmlStr) => new Promise((resolve) => {
    const title = head.title.toString();
    const meta = head.meta.toString();

    const htmlTemplate = _.template(htmlStr);
    const renderedView = htmlTemplate({
      meta,
      title,
      html,
      initialState,
      environment
    });

    resolve(renderedView);
  }));
}

