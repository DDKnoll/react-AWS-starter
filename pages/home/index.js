/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import { title, html } from './index.md';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
require('./styles.css');

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
  }

  getQueryString(field, url) {
    const href = url || window.location.href;
    const reg = new RegExp(`[?&]${field}=([^&#]*)`, 'i');
    const string = reg.exec(href);
    return string ? string[1] : null;
  }


  renderError() {
    return (
      <div className="error">
        <p>We're terribly sorry.</p>
        <div className="retry">
          Click to reload.
        </div>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <div className="home-video-wrap">
          <Link to="/about">Hello</Link>
        </div>
      </Layout>
    );
  }

}
