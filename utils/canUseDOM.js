/* ==========================================================================
 * ./utils/canUseDOM.js
 *
 * Check is possible to use DOM (Check if browser or node)
 * ========================================================================== */

module.exports = function canUseDOM() {
  // eslint-disable-next-line no-undef
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};

