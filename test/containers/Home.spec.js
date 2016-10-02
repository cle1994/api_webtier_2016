/* ==========================================================================
 * ./test/containers/Home.spec.js
 *
 * Home Component Test
 * ========================================================================== */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import Home from '../../src/shared/containers/Home';

describe('Home component tests', () => {
  it('contains the text "Home Page"', () => {
    assert(shallow(<Home />).contains('Home Page'), true);
  });
});

