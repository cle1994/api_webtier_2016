/* ==========================================================================
 * ./utils/filters/capitalizeStr.js
 *
 * Takes a string and capitalizes every word
 * ========================================================================== */

function capitalize(normalized) {
  return normalized.replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
}

module.exports = function capitalizeFilter(str, lower) {
  if (lower) {
    return capitalize(str.toLowerCase());
  }

  return capitalize(str);
};

