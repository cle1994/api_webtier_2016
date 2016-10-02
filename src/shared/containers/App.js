/* ==========================================================================
 * ./src/shared/containers/App.js
 *
 * App Container
 * ========================================================================== */

import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;

