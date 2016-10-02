/* ==========================================================================
 * ./src/shared/components/Home.js
 *
 * Home Component
 * ========================================================================== */

import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { helmetBaseConfig } from '~/config/helmet';

class Documentation extends Component {
  render() {
    return (
      <div className="page page--documentation">
        <Helmet {...helmetBaseConfig} />
        <h1 className="title">
          Documentation
        </h1>
        <div className="endpoint">
          <h2 className="route">
            /v1/color
          </h2>
          <div className="desc">
            <h4 className="method">
              GET http://webtier2016.christianle.com/v1/color
            </h4>
            <div className="message">
              Returns a hex color from RGB. Query parameters may include
              red, blue, and green. If any parameter is excluded, a random
              value will be assigned to it.
            </div>
            <h3 className="title">
              Params
            </h3>
            <table className="params">
              <tr>
                <th className="">
                  Name
                </th>
                <th className="">
                  Type
                </th>
                <th className="">
                  Description
                </th>
              </tr>
              <tr>
                <td>
                  red
                </td>
                <td>
                  Integer
                </td>
                <td>
                  OPTIONAL - an integer value between 0 and 255 representing red.
                </td>
              </tr>
              <tr>
                <td>
                  green
                </td>
                <td>
                  Integer
                </td>
                <td>
                  OPTIONAL - an integer value between 0 and 255 representing green.
                </td>
              </tr>
              <tr>
                <td>
                  blue
                </td>
                <td>
                  Integer
                </td>
                <td>
                  OPTIONAL - an integer value between 0 and 255 representing blue.
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="endpoint">
          <h2 className="route">
            /v1/contact
          </h2>
          <div className="desc">
            <h4 className="method">
              POST http://webtier2016.christianle.com/v1/contact
            </h4>
            <div className="message">
              Takes contact information: name, email, message. All fields are
              required. To simulate failed requests, 25% of requests will fail.
              This will send back the original sent data.
            </div>
            <h3 className="title">
              Fields
            </h3>
            <table className="params">
              <tr>
                <th className="">
                  Name
                </th>
                <th className="">
                  Type
                </th>
                <th className="">
                  Description
                </th>
              </tr>
              <tr>
                <td>
                  name
                </td>
                <td>
                  String
                </td>
                <td>
                  REQUIRED - Name of the contact
                </td>
              </tr>
              <tr>
                <td>
                  email
                </td>
                <td>
                  String
                </td>
                <td>
                  REQUIRED - Contacts email
                </td>
              </tr>
              <tr>
                <td>
                  message
                </td>
                <td>
                  String
                </td>
                <td>
                  REQUIRED - Message
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Documentation.propTypes = {};

export default Documentation;

