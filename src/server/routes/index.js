/* ==========================================================================
* ./src/server/routes/index.js
 *
 * Server Routes
 * ========================================================================== */

import _ from 'lodash';
import boom from 'boom';


// API prepend generator
const API_VERSION = 'v1';
function routeGenerator(route) {
  return `/${API_VERSION}/${route}`;
}


// Contact Route
const formRequirements = ['name', 'email', 'message'];
const contact = {
  config: {
    cors: {
      origin: ['*'],
      headers: [
        'Accept',
        'Accept-Language',
        'Authorization',
        'Content-Language',
        'Content-Type',
        'If-None-Match'
      ]
    }
  },
  method: 'post',
  path: routeGenerator('contact'),
  handler: (request, reply) => {
    const payload = request.payload;

    if (!payload) {
      return reply({
        error: true,
        boom: boom.badRequest,
        message: 'No data sent',
        data: {
          requiredParams: formRequirements
        }
      });
    }

    const payloadKeys = _.keys(payload);
    let missingKeys = [];
    for (let key of formRequirements) {
      if (payloadKeys.indexOf(key) < 0) {
        missingKeys.push(key);
      }
    }
    if (missingKeys.length > 0) {
      return reply({
        error: true,
        boom: boom.badRequest,
        message: 'Missing parameters',
        data: {
          requiredParams: formRequirements,
          missingParams: missingKeys,
          originalPayload: payload
        }
      });
    }

    if (Math.random() > 0.75) {
      return reply({
        error: true,
        boom: boom.badImplementation,
        message: 'Oops, you got unlucky :P',
        data: {
          message: '15% of all requests fail just for fun :D'
        }
      });
    }

    reply({
      success: true,
      message: 'Yay your request worked!',
      originalPayload: payload
    });
  }
}


// Color route
function rgbToHex(red, green, blue) {
  let base = 1 << 24;
  let r = red << 16;
  let g = green << 8;
  let b = blue;
  let hex = base + r + g + b;
  let hexStr = hex.toString(16).slice(1);
  return `#${hexStr}`;
}

function randomInt(min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const color = {
  method: 'get',
  path: routeGenerator('color'),
  handler: (request, reply) => {
    const queryParams = request.query;

    let red = parseInt(queryParams.red) || randomInt();
    let green = parseInt(queryParams.green) || randomInt();
    let blue = parseInt(queryParams.blue) || randomInt();

    reply({
      red,
      green,
      blue,
      originalParams: queryParams,
      hex: rgbToHex(red, green, blue)
    });
  }
};


export default [
  contact,
  color
];

