/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from '../Header/Header';
require('./Layout.css');

export default class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div id="app" ref={node => (this.root = node)}>
        <Header />
        <main>
          <div children={this.props.children} className={cx('content', this.props.className)} />
        </main>
      </div>
    );
  }
}
