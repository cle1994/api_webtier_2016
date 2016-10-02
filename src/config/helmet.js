/* ==========================================================================
 * ./src/config/helmet.js
 *
 * Base Helmet Config & Helmet properties generator
 * ========================================================================== */

export function updateHelmetProps(title, description) {
  return {
    title,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        itemprop: 'description',
        content: description
      }
    ]
  };
}

export const helmetBaseConfig = {
  title: '[InnoD] Web Tier 2016 API Documentation',
  meta: [
    {
      name: 'description',
      content: 'Documentation for web tier to practice making AJAX requests'
    },
    {
      name: 'author',
      content: 'Christian Le <christianle94@gmail.com>'
    },
    {
      itemprop: 'name',
      content: 'Christian Le <christianle94@gmail.com>'
    },
    {
      itemprop: 'description',
      content: 'Documentation for web tier to practice making AJAX requests'
    }
  ]
};

