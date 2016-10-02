/* ==========================================================================
 * ./src/client/devTools/show.js
 *
 * Puts Redux DevTools into a separate window.
 * ========================================================================== */

import React from 'react';
import { render } from 'react-dom';
import DevTools from '$/devTools';

export default function showDevTools(store) {
  const name = 'Redux DevTools';
  const popupProps = 'menubar=no,location=no,resizable=yes,scrollbars=no,status=no';

  // eslint-disable-next-line no-undef
  const popup = window.open(
    null,
    name,
    popupProps
  );

  if (!popup) {
    console.error(
      'Couldn\'t open Redux DevTools due to a popup blocker. ' +
      'Please disable the popup blocker for the current page.'
    );
  } else {
    popup.location.reload();
    popup.document.title = name;

    setTimeout(() => {
      popup.document.write('<div id="react-devtools-root"></div>');

      render(
        <DevTools store={store} />,
        popup.document.getElementById('react-devtools-root')
      );
    }, 10);
  }
}

