/* ==========================================================================
 * ./src/config/index.js
 *
 * Exports the config for a given environment
 * ========================================================================== */

const env = process.env.NODE_ENV || 'development';

export default {
  development: {
    port: '3030',
    api: 'http://localhost:3000'
  },
  production: {
    port: '3000',
    api: 'https://api.outcomes.com'
  }
}[env];

