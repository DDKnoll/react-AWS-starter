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
// import Link from '../Link';
require('./Header.css');
import searchSvg from './search.svg';

function Header() {
  return (
    <header className="header">
      <div className="menuItem">
        <img src={searchSvg} alt="Search" />
      </div>
      <div className="menuItem">
        <img src={searchSvg} alt="Search" />
      </div>
      <div className="menuItem">
        <img src={searchSvg} alt="Search" />
      </div>
    </header>
  );
}

export default Header;
