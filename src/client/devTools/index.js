/* ==========================================================================
 * ./src/client/devTools/index.js
 *
 * DevTools Container Window
 * ========================================================================== */

import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';

export default createDevTools(
  <LogMonitor />
);

